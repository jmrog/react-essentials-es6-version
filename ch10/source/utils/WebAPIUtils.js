import SnapkiteStreamClient from 'snapkite-stream-client';
import TweetActionCreators from '../actions/TweetActionCreators';

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

export default { initializeStreamOfTweets };

