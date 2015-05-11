/** @module DetailsView */
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

    /**
     * Represents topic details view.
     * @class {Backbone.View} DetailsView
     */
    return Backbone.View.extend({

        className: 'details',

        /**
         * Initializes topic detail view.
         */
        initialize: function () {
            // listen to clicks on cloud topic items
            this.listenTo(events, 'topic:clicked', this.render);
        },

        /**
         * Prepares data for rendering. Returned object's keys and values
         * are realted to HTML classes and content.
         * @param {TopicModel} topicModel
         * @returns {Object}
         */
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

        /**
         * Updates pointed detail field with given value.
         * @param {string} htmlContent Content to be set as detail value.
         * @param {string} cssClass CSS class used to costruct field selector.
         */
        updateField: function (htmlContent, cssClass) {
            var selector = '.' + cssClass;

            this.$el.find(selector).html(htmlContent);
        },

        /**
         * Uses given model to update itself.
         * @param {Object} options Should contain TopicModel instance under 'model' key.
         */
        render: function (options) {
            var renderData = this.getRenderData(options.model);

            _.mapObject(renderData, this.updateField, this);
        }
    });
});
