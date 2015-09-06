import React from 'react';
import ReactDOM from 'react-dom';

class ReactClass extends React.Component {
    constructor() {
        super();
        this.state = {
            isHeaderHidden: false
        };
    }

    handleClick() {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    }

    render() {
        const title = 'Stateful React Component';
        const headerElement = React.createElement('h1', { className: 'header', key: 'header' }, title);
        const buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick.bind(this), key: 'button' }, 'Toggle header');

        if (this.state.isHeaderHidden) {
            return React.createElement('div', null, [ buttonElement ]);
        }

        return React.createElement('div', null, [ buttonElement, headerElement ]);
    }
}

const reactComponentElement = React.createElement(ReactClass);
const reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

