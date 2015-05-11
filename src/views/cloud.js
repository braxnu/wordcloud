/** @module CloudView */
define([
    'backbone',
    'views/topic'
], function(
    Backbone,
    TopicView
) {
    'use strict';

    /**
     * Represents topic cloud view.
     * @class {Backbone.View} CloudView
     */
    return Backbone.View.extend({

        className: 'cloud',

        initialize: function() {
            // update view every time data are updated
            this.listenTo(this.collection, 'sync', this.render);
        },

        /**
         * Prepares and displays single topic's view.
         * @param {TopicModel} topicModel
         * @returns {TopicView}
         */
        renderTopic: function(topicModel) {
            var topicView = new TopicView({
                    model: topicModel
                });

            this.el.appendChild(topicView.el);

            return topicView;
        },

        /**
         * Updates cloud's view using collection data.
         * @returns {TopicView}
         */
        render: function() {
            this.collection.each(this.renderTopic, this);
        }

    });
});
