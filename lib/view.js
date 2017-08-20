'use strict';
var template = require('art-template');

module.exports = class ArtView {
    constructor(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config.art;
    }

    render(filename, locals, viewOptions){
        let options = Object.assign({}, this.config, viewOptions, { filename });
        return Promise.resolve(template(filename, locals, options));
    }

    renderString(tpl, locals, viewOptions){
        let options = Object.assign({}, this.config, viewOptions, { filename });
        return Promise.resolve(template.render(tpl, locals, options));
    }
};