require.config({
    paths: {
        backbone: '../bower_components/backbone/backbone',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});

define([
    'jquery',
    'views/app'
], function (
    $,
    AppView
) {
    'use strict';

    return new AppView({
        el: window.document.body
    });
});
