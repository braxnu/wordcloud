define([
    'backbone'
], function (
    Backbone
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
            this.trigger('topic:clicked', {
                model: this.model
            });
        }

    });
});
