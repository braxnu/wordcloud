/** @module TopicModel */
define([
    'backbone'
], function (
    Backbone
) {
    'use strict';

    /**
     * Sentiment threshold dictionary used by getSentimentRank method.
     * @private
     * @constant
     * @type {Object}
     */
    var SCORE_THRESHOLDS = {
            HIGH: 60,
            NORMAL: 40
        };

    /**
     * Represents topic model.
     * @class {Backbone.Model} TopicModel
     */
    return Backbone.Model.extend({

        /**
         * Returns sentiment rank name basing on topic's sentiment score.
         * @returns {string} One of following: 'high', 'normal', 'low'.
         */
        getSentimentRank: function () {
            var score = this.get('sentimentScore');

            if (score > SCORE_THRESHOLDS.HIGH) {
                return 'high';
            } else if (score < SCORE_THRESHOLDS.NORMAL) {
                return 'low';
            } else {
                return 'normal';
            }
        },

        /**
         * Returns topic's numeric popularity band number form 1 to 6.
         * @returns {Number}
         */
        getPopularityRank: function () {
            var bands = this.collection.getPopularityBandList(),

                // starts from highest threshold
                i = bands.length - 1;

            // iterates through band thresholds
            while (typeof bands[i] !== 'undefined') {
                if (this.get('volume') >= bands[i]) {
                    // returns band number (not index) as soon as a threshold
                    // lower or equal to topic's volume is found
                    return i + 1;
                }

                i--;
            }
        }

    });
});
