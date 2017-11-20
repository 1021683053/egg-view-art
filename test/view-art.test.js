'use strict';

const request = require('supertest');
const mm = require('egg-mock');

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

  // it('should render with cache', function* () {
  //   const cacheFile = path.join(fixtures, 'apps/ejs-view/app/view/cache.ejs');
  //   yield fs.writeFile(cacheFile, '1');
  //   yield app.httpRequest()
  //     .get('/cache')
  //     .expect('1')
  //     .expect(200);

  //   yield fs.writeFile(cacheFile, '2');
  //   yield app.httpRequest()
  //     .get('/cache')
  //     .expect('1')
  //     .expect(200);
  // });

});
