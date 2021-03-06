import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Button from './Button.react';

const inputStyle = {
    marginRight: '5px'
};

class CollectionRenameForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }

    componentWillMount() {
        this.setState({
            inputValue: this.props.name
        });
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue
        });
    }

    handleInputValueChange(event) {
        const inputValue = event.target.value;
        this.setInputValue(inputValue);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const collectionName = this.state.inputValue;
        this.props.onChangeCollectionName(collectionName);
    }

    handleFormCancel(event) {
        event.preventDefault();
        const collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    }

    componentDidMount() {
        this.refs.collectionName.focus();
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit.bind(this)}>
                <Header text="Collection name:" />
                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={this.handleInputValueChange.bind(this)}
                        value={this.state.inputValue}
                        ref="collectionName" />
                </div>
                <Button label="Change" onClick={this.handleFormSubmit.bind(this)} />
                <Button label="Cancel" onClick={this.handleFormCancel.bind(this)} />
            </form>
        );
    }
}

export default CollectionRenameForm;
