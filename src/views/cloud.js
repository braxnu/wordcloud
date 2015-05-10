define([
    'backbone',
    'views/topic'
], function(
    Backbone,
    TopicView
) {
    'use strict';

    return Backbone.View.extend({

        className: 'cloud',

        initialize: function() {
            this.listenTo(this.collection, 'sync', this.render);
        },

        renderTopic: function(topicModel) {
            var topicView = new TopicView({
                    model: topicModel
                });

            this.el.appendChild(topicView.el);

            return topicView;
        },

        render: function() {
            this.collection.each(this.renderTopic, this);
        }

    });
});
