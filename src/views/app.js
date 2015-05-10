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
        }

    });
});
