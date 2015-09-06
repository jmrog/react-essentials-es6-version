import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Tweet from './Tweet.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';

export default class StreamTweet extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
    }

    addTweetToCollection(tweet) {
        CollectionActionCreators.addTweetToCollection(tweet);
    }

    componentWillMount() {
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    }

    componentDidMount() {
        const componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    }

    componentWillReceiveProps(nextProps) {
        const currentTweetLength = this.props.tweet.text.length;
        const nextTweetLength = nextProps.tweet.text.length;
        const numberOfCharactersIsIncreasing = (nextTweetLength > currentTweetLength);
        let headerText;

        if (numberOfCharactersIsIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            numberOfCharactersIsIncreasing,
            headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.tweet.text.length > 1;
    }

    componentDidUpdate(prevProps, prevState) {
        window.snapterest.numberOfDisplayedTweets++;
    }

    componentWillUnmount() {
        delete window.snapterest;
    }

    render() {
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.addTweetToCollection} />
            </section>
        );
    }
}
