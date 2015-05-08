define([
    'views/app',
    'sinon'
], function (
    AppView,
    sinon
) {
    'use strict';

    describe('Application View', function () {

        it('instantiates subviews', function () {
            var appView = new AppView();

            expect(appView.detailsView).toBeDefined();
            expect(appView.detailsView instanceof Backbone.View).toBe(true);

            expect(appView.cloudView).toBeDefined();
            expect(appView.cloudView instanceof Backbone.View).toBe(true);
        });

        it('listens to topic click event', function () {
            var onTopicClickedStub = sinon.stub(AppView.prototype, 'onTopicClicked'),
                appView = new AppView();

            appView.cloudView.trigger('topic:clicked');
            expect(onTopicClickedStub.called).toBe(true);

            AppView.prototype.onTopicClicked.restore();
        });

        it('passes clicked topic data to details view', function () {
            var appView = new AppView(),
                detailsRenderStub = sinon.stub(appView.detailsView, 'render'),
                testParams = {
                    model: {}
                };

            appView.onTopicClicked(testParams);

            expect(detailsRenderStub.called).toBe(true);
            expect(detailsRenderStub.getCall(0).args[0]).toBe(testParams);

            appView.detailsView.render.restore();
        });

    });
});
