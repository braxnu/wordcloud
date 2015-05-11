/** @module TopicView */
define([
    'backbone',
    'events'
], function (
    Backbone,
    events
) {
    'use strict';

    /**
     * Represents topic view.
     * @class {Backbone.View} TopicView
     */
    return Backbone.View.extend({

        className: 'topic',

        events: {
            'click': 'onClick'
        },

        /**
         * Initializes and renders topic view (no need to re-render). Also sets
         * sentiment and popularity related CSS classes on view element.
         * @params {Object} options Should contain instance of TopicModel under 'model' key.
         */
        initialize: function () {
            this.el.innerHTML = this.model.get('label');
            this.$el.addClass('sentiment-' + this.model.getSentimentRank());
            this.$el.addClass('popularity-' + this.model.getPopularityRank() + '');
        },

        /**
         * Sends message about topic item click through event bus.
         */
        onClick: function () {
            events.trigger('topic:clicked', {
                model: this.model
            });
        }

    });
});
