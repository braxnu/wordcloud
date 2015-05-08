define([
    'backbone'
], function (
    Backbone
) {
    'use strict';

    var SCORE_THRESHOLDS = {
        HIGH: 60,
        NORMAL: 40
    };

    return Backbone.Model.extend({

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

        getPopularityRank: function () {
            var bands = this.collection.getPopularityBandList(),
                i = bands.length - 1;

            while (typeof bands[i] !== 'undefined') {
                if (this.get('volume') >= bands[i]) {
                    return i + 1;
                }

                i--;
            }
        }

    });
});
