define([
    'backbone',
    'collections/topic',
    'views/details',
    'views/cloud'
], function (
    Backbone,
    TopicCollection,
    DetailsView,
    CloudView
) {
    'use strict';

    return Backbone.View.extend({

        initialize: function () {
            var topicCollection = new TopicCollection();

            this.detailsView = new DetailsView({
                el: this.$el.find('.details')
            });

            this.cloudView = new CloudView({
                el: this.$el.find('.cloud'),
                collection: topicCollection
            });

            topicCollection.fetch();
            this.listenTo(this.cloudView, 'topic:clicked', this.onTopicClicked);
        },

        onTopicClicked: function (options) {
            this.detailsView.render(options);
        }

    });
});
