import React from 'react';
import Header from './Header.react';
import Button from './Button.react';
import CollectionRenameForm from './CollectionRenameForm.react';
import CollectionExportForm from './CollectionExportForm.react';

class CollectionControls extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'new',
            isEditingName: false
        };
    }

    getHeaderText() {
        const { numberOfTweetsInCollection } = this.props;
        let text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection === 1) {
            text += ' tweet in your';
        } else {
            text += ' tweets in your';
        }

        return (
            <span>
                {text} <strong>{this.state.name}</strong> collection
            </span>
        );
    }

    toggleEditCollectionName() {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    }

    setCollectionName(name) {
        this.setState({
            name,
            isEditingName: false
        });
    }

    render() {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName.bind(this)}
                    onCancelCollectionNameChange={this.toggleEditCollectionName.bind(this)} />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />

                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName.bind(this)} />

                <Button
                    label="Empty collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection} />

                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
            </div>
        );
    }
}

export default CollectionControls;
