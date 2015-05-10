define([
    'backbone',
    'sinon',
    'views/cloud',
    'views/topic'
], function(
    Backbone,
    sinon,
    CloudView,
    TopicView
) {
    'use strict';

    describe('Cloud View', function () {

        it('renders every topic item in collection', function () {
            var stub = sinon.stub(CloudView.prototype, 'renderTopic'),
                testItems = [
                    {},
                    {}
                ],
                testCollection = new Backbone.Collection(testItems),
                cloudView = new CloudView({
                    collection: testCollection
                });

            cloudView.render();

            expect(stub.called).toBe(true);
            expect(stub.callCount).toBe(testItems.length);

            CloudView.prototype.renderTopic.restore();
        });

        it('uses TopicView to render topic items', function () {
            var stub = sinon.stub(TopicView.prototype, 'initialize');

            CloudView.prototype.renderTopic.call(
                new Backbone.View(),
                new Backbone.Model()
            );

            expect(stub.called).toBe(true);

            TopicView.prototype.initialize.restore();
        });

    });
});
