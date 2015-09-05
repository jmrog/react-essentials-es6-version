import React from 'react';

const tweetStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
};

const imageStyle = {
    maxHeight: '400px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
};

class Tweet extends React.Component {
    handleImageClick() {
        const { tweet, onImageClick } = this.props;

        if (onImageClick) {
            onImageClick(tweet);
        }
    }

    render() {
        const { tweet } = this.props;
        const tweetMediaUrl = tweet.media[0].url;

        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick.bind(this)} style={imageStyle} />
            </div>
        );
    }
}

Tweet.propTypes = {
    tweet(properties, propertyName, componentName) {
        const tweet = properties[propertyName];

        if (!tweet) {
            return new Error('Tweet must be set!');
        }

        if (!tweet.media) {
            return new Error('Tweet must have an image.');
        }
    },

    onImageClick: React.PropTypes.func
};

export default Tweet;
