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

    return Backbone.Collection.extend({

        model: TopicModel,

        url: 'topics.json',

        parse: function (data) {
            return data.topics;
        },

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
