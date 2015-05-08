define([
    'models/topic'
], function (
    TopicModel
) {
    'use strict';

    describe('Topic Model', function () {

        it('returns proper sentiment rank', function () {
            var topicModel;

            topicModel = new TopicModel({sentimentScore: 61});
            expect(topicModel.getSentimentRank()).toBe('high');

            topicModel = new TopicModel({sentimentScore: 60});
            expect(topicModel.getSentimentRank()).toBe('normal');

            topicModel = new TopicModel({sentimentScore: 40});
            expect(topicModel.getSentimentRank()).toBe('normal');

            topicModel = new TopicModel({sentimentScore: 39});
            expect(topicModel.getSentimentRank()).toBe('low');
        });

        it('returns proper popularity rank', function () {
            var topicModel,
                testCollection = {
                    getPopularityBandList: function () {
                        return [0, 10, 20];
                    }
                },
                options = {
                    collection: testCollection
                };

            topicModel = new TopicModel({volume: 1}, options);
            expect(topicModel.getPopularityRank()).toBe(1);

            topicModel = new TopicModel({volume: 9}, options);
            expect(topicModel.getPopularityRank()).toBe(1);

            topicModel = new TopicModel({volume: 10}, options);
            expect(topicModel.getPopularityRank()).toBe(2);

            topicModel = new TopicModel({volume: 19}, options);
            expect(topicModel.getPopularityRank()).toBe(2);

            topicModel = new TopicModel({volume: 20}, options);
            expect(topicModel.getPopularityRank()).toBe(3);
        });

    });
});
