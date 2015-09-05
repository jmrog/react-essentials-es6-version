import React from 'react';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';
import SnapkiteStreamClient from 'snapkite-stream-client';
//const SnapkiteStreamClient = require('snapkite-stream-client');

class Stream extends React.Component {
    constructor() {
        super();
        this.state = {
            tweet: null
        };
    }

    componentDidMount() {
        SnapkiteStreamClient.initializeStream(this.handleNewTweet.bind(this));
    }

    componentWillUnmount() {
        SnapkiteStreamClient.destroyStream();
    }

    handleNewTweet(tweet) {
        this.setState({
            tweet
        });
    }

    render() {
        const tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..." />
        );
    }
}

export default Stream;
