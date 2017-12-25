'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const fs = require('mz/fs');
const path = require('path');
const fixtures = path.join(__dirname, 'fixtures');

describe('test/view-art.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view-art-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, art')
      .expect(200);
  });

  it('should render with locals', () => {
    return app.httpRequest()
      .get('/locals')
      .expect('hello world\n')
      .expect(200);
  });

  it('should render with include', () => {
    return app.httpRequest()
      .get('/include')
      .expect('hello header\nhello footer\n')
      .expect(200);
  });
  it('should render with helper', () => {
    return app.httpRequest()
      .get('/helper')
      .expect('hello world\n')
      .expect(200);
  });

  it('should render with cache',  function* (){
    const cacheFile = path.join(fixtures, 'apps/view-art-test/app/view/cache.art');
    yield fs.writeFile(cacheFile, '1');
    yield app.httpRequest()
      .get('/cache')
      .expect('1')
      .expect(200);

    yield fs.writeFile(cacheFile, '2');
    yield app.httpRequest()
      .get('/cache')
      .expect('2')
      .expect(200);
  });

  it('should render with imports', () => {
    return app.httpRequest()
      .get('/imports')
      .expect('100')
      .expect(200);
  });

});
