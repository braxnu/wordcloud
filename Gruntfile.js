module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            src: 'src/**/*.js',
            test: {},
            options: {
                specs: 'specs/**/*.js',
                template: require('grunt-template-jasmine-requirejs'),
                vendor: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/backbone/backbone.js'
                ],
                templateOptions: {
                    requireConfig: {
                        baseUrl: 'src',
                        paths: {
                            sinon: '../bower_components/sinon/lib/sinon',
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
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
