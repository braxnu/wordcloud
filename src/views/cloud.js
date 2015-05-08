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

        initialize: function(options) {
            this.collection = options.collection;
            this.listenTo(this.collection, 'sync', this.render);
        },

        renderTopic: function(topicModel) {
            var topicView = new TopicView({
                    model: topicModel
                });

            topicView.render();
            this.el.appendChild(topicView.el);
            this.listenTo(topicView, 'topic:clicked', this.onTopicClicked);

            return topicView;
        },

        render: function() {
            this.collection.each(this.renderTopic, this);
        },

        onTopicClicked: function(options) {
            this.trigger('topic:clicked', options);
        }

    });
});
