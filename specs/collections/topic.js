define([
    'collections/topic'
], function (
    TopicCollection
) {
    'use strict';

    describe('Topic Collection', function () {

        it('extracts data from envelope', function () {
            var testObject = {
                    test: 1
                },
                responseData = {
                    topics: [testObject]
                },
                result = TopicCollection.prototype.parse(responseData);

            expect(result[0]).toBe(testObject);
        });

        it('returns list of popularity level bands', function () {
            var topics = [
                    {volume: 1},
                    {volume: 2},
                    {volume: 3},
                    {volume: 4},
                    {volume: 5},
                    {volume: 601},
                ],
                collection = new TopicCollection(topics),
                bands = collection.getPopularityBandList();

            expect(bands.length).toBe(6);
            expect(bands[0]).toBe(0);
            expect(bands[5]).toBe(500);
        });

    });
});
