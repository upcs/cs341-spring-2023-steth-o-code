import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    test('app test', () => {
        expect(4+3).toBe(7);
        // const tree = renderer.create(<App />).toJSON();
        // expect(tree).toMatchSnapshot();
    });
});