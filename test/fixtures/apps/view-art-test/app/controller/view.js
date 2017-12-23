'use strict';

// const Controller = require('egg').Controller;

// class ViewController extends Controller {
//     async renderWithLocals() {
//         return this.ctx.render('locals.art', {
//             data: 'world'
//         });
//     }

//     async include(ctx){
//         await ctx.render('include/index.art');
//     }

//     async renderWithHelper(ctx) {
//         await ctx.render('helper.art');
//     };

//     async cache(ctx){
//         await ctx.render('cache.art');
//     };
// }

module.exports = {
    renderWithLocals: function* (ctx){
        yield ctx.render('locals.art', {
            data: 'world'
        });
    },

    include: function* (ctx){
        yield ctx.render('include/index.art');
    },

    renderWithHelper: function* (ctx) {
        yield ctx.render('helper.art');
    },

    cache: function* (ctx){
        yield ctx.render('cache.art');
    },

    renderWithImports: function* (ctx){
        yield ctx.render('imports.art', {
            data: 1
        });
    }
};