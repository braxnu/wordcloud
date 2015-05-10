define([
    'backbone',
    'events'
], function (
    Backbone,
    events
) {
    'use strict';

    return Backbone.View.extend({

        className: 'topic',

        events: {
            'click': 'onClick'
        },

        initialize: function () {
            this.el.innerHTML = this.model.get('label');
            this.$el.addClass('sentiment-' + this.model.getSentimentRank());
            this.$el.addClass('popularity-' + this.model.getPopularityRank() + '');
        },

        onClick: function () {
            events.trigger('topic:clicked', {
                model: this.model
            });
        }

    });
});
