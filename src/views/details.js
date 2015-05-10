define([
    'backbone',
    'underscore',
    'events'
], function (
    Backbone,
    _,
    events
) {
    'use strict';

    return Backbone.View.extend({

        className: 'details',

        initialize: function () {
            this.listenTo(events, 'topic:clicked', this.render);
        },

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

        updateField: function (htmlContent, cssClass) {
            var selector = '.' + cssClass;

            this.$el.find(selector).html(htmlContent);
        },

        render: function (options) {
            var renderData = this.getRenderData(options.model);

            _.mapObject(renderData, this.updateField, this);
        }
    });
});
