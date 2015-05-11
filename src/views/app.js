/** @module AppView */
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

    /**
     * Represents application view.
     * @class {Backbone.View} AppView
     */
    return Backbone.View.extend({

        /**
         * Initializes app view in DOM element given in constructor options.
         * Instantiates and starts necessary components.
         * @param {Object} options
         */
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
