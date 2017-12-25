'use strict';

exports.keys = '123456';

exports.view = {
    defaultViewEngine: 'art',
    mapping: {
        '.art': 'art',
        '.html': 'art'
    }
};

exports.art = {
    imports: {
        hundredTimes (value) {
            return value * 100
        }
    }
}