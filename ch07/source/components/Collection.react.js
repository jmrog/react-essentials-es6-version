import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls.react';
import TweetList from './TweetList.react';
import Header from './Header.react';

class Collection extends React.Component {
    createHtmlMarkupStringOfTweetList() {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );

        const htmlMarkup = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkup);
    }

    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    }

    getNumberOfTweetsInCollection() {
        return this.getListOfTweetIds().length;
    }

    render() {
        const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if (numberOfTweetsInCollection > 0) {
            const tweets = this.props.tweets;
            const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            const removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection.bind(this);
            const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection.bind(this);

            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
                </div>
            );
        }

        return (
            <Header text="Your collection is empty." />
        );
    }
}

export default Collection;
