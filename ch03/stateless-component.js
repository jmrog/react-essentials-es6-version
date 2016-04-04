import React from 'react';
import ReactDOM from 'react-dom';

class ReactClass extends React.Component {
    render() {
        return React.createElement('h1', { className: 'header' }, 'React Component');
    }
}

const reactComponent = ReactDOM.render(<ReactClass/>, document.getElementById('react-application'));
