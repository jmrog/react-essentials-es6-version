import React from 'react';
import Tweet from './Tweet.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';

const listStyle = {
    padding: '0'
};

const listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class TweetList extends React.Component {
    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    }

    getTweetElement(tweetId) {
        const tweet = this.props.tweets[tweetId];
        const handleRemoveTweetFromCollection = this.removeTweetFromCollection;
        let tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={handleRemoveTweetFromCollection} />
            );
        } else {
            tweetElement = (
                <Tweet tweet={tweet} />
            );
        }

        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
    }

    removeTweetFromCollection(tweet) {
        CollectionActionCreators.removeTweetFromCollection(tweet.id);
    }

    render() {
        const tweetElements = this.getListOfTweetIds().map(this.getTweetElement.bind(this));
        return (
            <ul listStyle={listStyle}>
                {tweetElements}
            </ul>
        );
    }
}

export default TweetList;
