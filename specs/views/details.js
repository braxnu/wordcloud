define([
    'backbone',
    'views/details'
], function (
    Backbone,
    DetailsView
) {
    'use strict';

    describe('Details View', function () {

        it('prepares render data for detail fields', function () {
            var detailsView = new DetailsView(),
                testModel = new Backbone.Model({
                    volume: 23,
                    sentiment: {
                        neutral: 10
                    }
                }),
                result = detailsView.getRenderData(testModel);

            [
                'label',
                'total',
                'positive',
                'neutral',
                'negative'
            ].forEach(function (propName) {
                expect(result[propName]).toBeDefined();
            });

            expect(result.total).toBe(23);
            expect(result.neutral).toBe(10);
        });

        it('updates its element with proper data', function () {
            var detailsView = new DetailsView(),
                testModel = new Backbone.Model({
                    volume: 23,
                    sentiment: {
                        neutral: 10
                    }
                });

            detailsView.el.innerHTML = [
                '<div>Information on topic "<span class="label"></span>"</div>',
                '<div class="total-row">Total mentions <span class="total"></span></div>',
                '<div>Positive mentions <span class="positive"></span></div>',
                '<div>Neutral mentions <span class="neutral"></span></div>',
                '<div>Negative mentions <span class="negative"></span></div>'
            ].join('\n');

            detailsView.render({
                model: testModel
            });

            expect(detailsView.$el.find('.total').html()).toBe('23');
            expect(detailsView.$el.find('.neutral').html()).toBe('10');
        });

    });
});
