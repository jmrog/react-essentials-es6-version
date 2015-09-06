jest.autoMockOff();

describe('Collection utilities module', () => {
    const CollectionUtils = require('../CollectionUtils');

    const collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {}
    };

    it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
        const actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        const expectedNumberOfTweetsInCollection = 3;

        expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
    });

    it('checks if collection is not empty', function isEmptyCollection() {
        const actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

        expect(actualIsEmptyCollectionValue).toBeDefined();
        expect(actualIsEmptyCollectionValue).toBe(false);
        expect(actualIsEmptyCollectionValue).not.toBe(true);
    });
});

