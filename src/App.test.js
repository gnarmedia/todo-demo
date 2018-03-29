import React from 'react';
import renderer from 'react-test-renderer';

// import component
import App from './App.jsx';

describe('App', () => {
    it('should render the App', () => {
        const tree = renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
