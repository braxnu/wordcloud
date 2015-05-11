define([
    'backbone',
    'underscore',
    'models/topic'
], function (
    Backbone,
    _,
    TopicModel
) {
    'use strict';

    /**
     * Number of popularity band thresholds returned by getPopularityBandList
     * method.
     * @private
     * @constant
     * @type {Number}
     */
    var POPULARITY_BAND_COUNT = 6;

    /**
     * Holds topic model list.
     * @class {Backbone.Collection} TopicCollection
     */
    return Backbone.Collection.extend({

        model: TopicModel,

        url: 'topics.json',


        /**
         * Extracts data from JSON envelope.
         * @param {Object} data Parsed original JSON object.
         * @returns {Array}
         */
        parse: function (data) {
            return data.topics;
        },

        /**
         * Returns list of numeric thresholds for popularity bands.
         * @returns {Array}
         */
        getPopularityBandList: function () {
            var max,
                min,
                diff,
                step,
                bands = [];

            this.each(function (topicModel) {
                var volume = topicModel.get('volume');

                if (max < volume || typeof max === 'undefined') {
                    max = volume;
                }

                if (min > volume || typeof min === 'undefined') {
                    min = volume;
                }
            });

            diff = max - min;
            step = diff / 6;

            for (var i = 0; i < 6; i++) {
                bands.push(Math.floor(step * i));
            }

            return bands;
        }

    });
});
