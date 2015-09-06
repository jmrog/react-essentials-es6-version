import TweetUtils from './TweetUtils';

function getNumberOfTweetsInCollection(collection) {
    return TweetUtils.getListOfTweetIds(collection).length;
}

function isEmptyCollection(collection) {
    return getNumberOfTweetsInCollection(collection) === 0;
}

const CollectionUtils = {
    getNumberOfTweetsInCollection,
    isEmptyCollection
};

export default CollectionUtils;

