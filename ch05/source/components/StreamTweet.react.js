import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Tweet from './Tweet.react';

export default class StreamTweet extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        };
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

    componentWillUnmount() {
        delete window.snapterest;
    }

    render() {
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
}
