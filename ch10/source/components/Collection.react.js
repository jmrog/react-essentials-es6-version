import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls.react';
import TweetList from './TweetList.react';
import Header from './Header.react';
import CollectionUtils from '../utils/CollectionUtils';
import CollectionStore from '../stores/CollectionStore';

class Collection extends React.Component {
    constructor() {
        super();
        this.state = {
            collectionTweets: CollectionStore.getCollectionTweets()
        };
        // adding the handler here in order to work around an issue involving `this` binding when using
        // React and ES6
        this.onCollectionChange = () => {
            this.setState({
                collectionTweets: CollectionStore.getCollectionTweets()
            });
        };
    }

    componentDidMount() {
        CollectionStore.addChangeListener(this.onCollectionChange);
    }

    componentWillUnmount() {
        CollectionStore.removeChangeListener(this.onCollectionChange);
    }

    createHtmlMarkupStringOfTweetList() {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.state.collectionTweets} />
        );

        const htmlMarkup = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkup);
    }

    render() {
        const collectionTweets = this.state.collectionTweets;
        const numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
        let htmlMarkup;

        if (numberOfTweetsInCollection > 0) {
            htmlMarkup = this.createHtmlMarkupStringOfTweetList();

            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup} />

                    <TweetList tweets={collectionTweets} />
                </div>
            );
        }

        return (
            <Header text="Your collection is empty." />
        );
    }
}

export default Collection;
