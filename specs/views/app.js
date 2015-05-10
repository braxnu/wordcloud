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

    });
});
