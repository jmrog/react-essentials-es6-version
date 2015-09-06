import React from 'react';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';
import TweetStore from '../stores/TweetStore';

class Stream extends React.Component {
    constructor() {
        super();
        this.state = {
            tweet: TweetStore.getTweet()
        };
        // we create the following handler here in order to work around an issue involving `this`
        // binding when using React and ES6
        this.onTweetChange = () => {
            this.setState({ tweet: TweetStore.getTweet() })
        };
    }

    componentDidMount() {
        TweetStore.addChangeListener(this.onTweetChange);
    }

    componentWillUnmount() {
        TweetStore.removeChangeListener(this.onTweetChange);
    }

    render() {
        const { tweet } = this.state;

        if (tweet) {
            return (
                <StreamTweet tweet={tweet} />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..." />
        );
    }
}

export default Stream;
