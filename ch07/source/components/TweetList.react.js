import React, { Component } from 'react';
import Tweet from './Tweet.react';

const listStyle = {
    padding: '0'
};

const listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class TweetList extends Component {
    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    }

    getTweetElement(tweetId) {
        const tweet = this.props.tweets[tweetId];
        const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
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
