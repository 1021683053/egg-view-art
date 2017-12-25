'use strict';

/**
 * egg-view-art default config
 * @member Config#eggViewArt
 * @property {String} SOME_KEY - some description
 */
'use strict';

const path = require('path');

module.exports = appInfo => {
    return {
        art: {
            root: path.join(appInfo.baseDir, 'app/view'),
            filename: null,
            escape: true,
            debug: process.env.NODE_ENV !== 'production',
            bail: true,
            cache: true,
            minimize: true,
            compileDebug: false,
            extname: '.art',
            ignore: [],
        }
    };
};