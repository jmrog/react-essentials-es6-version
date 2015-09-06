import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    addTweetToCollection(tweet) {
        const action = {
            type: 'add_tweet_to_collection',
            tweet
        };

        AppDispatcher.dispatch(action);
    },

    removeTweetFromCollection(tweetId) {
        const action = {
            type: 'remove_tweet_from_collection',
            tweetId
        };

        AppDispatcher.dispatch(action);
    },

    removeAllTweetsFromCollection() {
        const action = {
            type: 'remove_all_tweets_from_collection'
        };

        AppDispatcher.dispatch(action);
    },

    setCollectionName(collectionName) {
        const action = {
            type: 'set_collection_name',
            collectionName
        };

        AppDispatcher.dispatch(action);
    }
};

