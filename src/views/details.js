define([
    'backbone',
    'underscore'
], function (
    Backbone,
    _
) {
    'use strict';

    return Backbone.View.extend({

        className: 'details',

        getRenderData: function (topicModel) {
            var sentiment = topicModel.get('sentiment') || {};

            return {
                label: topicModel.get('label') || '',
                total: topicModel.get('volume') || 0,
                positive: sentiment.positive || 0,
                neutral: sentiment.neutral || 0,
                negative: sentiment.negative || 0
            };
        },

        render: function (options) {
            var renderData = this.getRenderData(options.model);

            _.mapObject(renderData, function (htmlContent, cssClass) {
                var selector = '.' + cssClass;

                this.$el.find(selector).html(htmlContent);
            }, this);
        }
    });
});
