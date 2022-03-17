import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    test('dummy test', () => {
        expect(4+7).toBe(11);
        // const tree = renderer.create(<App />).toJSON();
        // expect(tree).toMatchSnapshot();
    });
});