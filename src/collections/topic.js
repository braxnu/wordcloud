/** @module TopicCollection */
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
         * Holds cached result of getPopularityBandList method.
         * @type {null|Array}
         */
        bandsCache: null,

        /**
         * Initializes topic model.
         */
        initialize: function () {
            // clear band cache every time topic data are reloaded
            this.on('sync', this.clearBandCache, this);
        },

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
            if (this.bandsCache) {
                return this.bandsCache;
            }

            var volumeValuesList = this.map(function (topicModel) {
                    return topicModel.get('volume');
                }),
                max = _.max(volumeValuesList),
                min = _.min(volumeValuesList),
                diff = max - min,
                step = diff / POPULARITY_BAND_COUNT,
                bands = [];

            for (var i = 0; i < POPULARITY_BAND_COUNT; i++) {
                bands.push(Math.floor(step * i));
            }

            this.bandsCache = bands;

            return bands;
        },

        /**
         * Clears cache for band list returned by getPopularityBandList.
         */
        clearBandCache: function () {
            this.bandsCache = null;
        }

    });
});
