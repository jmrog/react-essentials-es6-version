import React from 'react';

const headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
};

class Header extends React.Component {
    render() {
        return (
            <h2 style={headerStyle}>{this.props.text}</h2>
        );
    }
}

Header.defaultProps = {
    text: 'Default header'
};

export default Header;
