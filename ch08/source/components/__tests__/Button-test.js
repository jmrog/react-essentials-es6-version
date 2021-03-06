jest.dontMock('../Button.react');

describe('Button component', () => {
    it('calls handler function on click', () => {
        // can't use `import` with `jest.dontMock`
        const React = require('react');
        const TestUtils = require('react-addons-test-utils');
        const Button = require('../Button.react');
        const handleClick = jest.genMockFunction();

        const button = TestUtils.renderIntoDocument(
            // binding isn't necessary in this case
            <Button handleClick={handleClick} />
        );

        const buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });
});

