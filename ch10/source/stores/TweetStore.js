import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';

let tweet = null;

function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

function emitChange() {
    TweetStore.emit('change');
}

const TweetStore = assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    getTweet() {
        return tweet;
    }
});

function handleAction(action) {
    if (action.type === 'receive_tweet') {
        setTweet(action.tweet);
        emitChange();
    }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);

export default TweetStore;

