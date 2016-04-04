jest.dontMock('../Header.react');

describe('Header component', () => {
    it('renders provided header text', () => {
        // can't use `import` with jest and `dontMock`.
        const React = require('react');
        const ReactDOM = require('react-dom');
        const TestUtils = require('react-addons-test-utils');
        let Header = require('../Header.react');
        Header = Header.default || Header;

        const header = TestUtils.renderIntoDocument(
            <Header text="Testing..." />
        );

        const actualHeaderText = ReactDOM.findDOMNode(header).textContent;

        expect(actualHeaderText).toBe('Testing...');

        const defaultHeader = TestUtils.renderIntoDocument(
            <Header />
        );

        const actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;

        expect(actualDefaultHeaderText).toBe('Default header');
    });
});

