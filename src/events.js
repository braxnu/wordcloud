/** @module events */
define([
    'underscore',
    'backbone'
], function (
    _,
    Backbone
) {
    'use strict';

    /**
     * Global event bus instance.
     * @type {Backbone.Events}
     */
    return _.extend({}, Backbone.Events);
});
