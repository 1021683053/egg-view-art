'use strict';
module.exports = app => {
    app.view.use('art', require('./lib/view'));
};
