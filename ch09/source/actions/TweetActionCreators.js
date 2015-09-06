import AppDispatcher from '../dispatcher/AppDispatcher';

function receiveTweet(tweet) {
    const action = {
        type: 'receive_tweet',
        tweet
    };

    AppDispatcher.dispatch(action);
}

const TweetActionCreators = {
    receiveTweet
};

export default TweetActionCreators;

