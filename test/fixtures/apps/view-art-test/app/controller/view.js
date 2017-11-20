'use strict';

const Controller = require('egg').Controller;

class ViewController extends Controller {
    async renderWithLocals() {
        return this.ctx.render('locals.art', {
            data: 'world'
        });
    }

    async include(ctx){
        await ctx.render('include/index.art');
    }

    async renderWithHelper(ctx) {
        await ctx.render('helper.art');
    };

    async cache(ctx){
        await ctx.render('cache.art');
    };
}

module.exports = ViewController;