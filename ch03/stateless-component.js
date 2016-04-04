import React from 'react';
import ReactDOM from 'react-dom';

class ReactClass extends React.Component {
    render() {
        return React.createElement('h1', { className: 'header' }, 'React Component');
    }
}

const reactComponentElement = React.createElement(ReactClass);
const reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

