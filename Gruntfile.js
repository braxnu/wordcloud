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
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'src/main.js',
                    name: 'main',
                    out: 'target/main.js'
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            all: ['src/**/*.js']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            '*.css',
                            '*.html',
                            '*.json'
                        ],
                        dest: 'target/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/requirejs',
                        src: 'require.js',
                        dest: 'target/'
                    }
                ]
            }
        },
        'string-replace': {
            dist: {
                files: {
                    'target/index.html': 'target/index.html'
                },
                options: {
                    replacements: [
                        {
                            pattern: '../bower_components/requirejs/',
                            replacement: ''
                        }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('build', [
        'jshint:all',
        'jasmine:test',
        'requirejs:compile',
        'copy:main',
        'string-replace:dist'
    ]);
};
