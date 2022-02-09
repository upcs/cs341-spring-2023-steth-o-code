import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../screens/Login';

describe('<Login />', () => {
    it("has 1 children", async () => {
        const tree = renderer.create(<Login />).toJSON();
        await expect(tree.children.length).toBe(1);
    });
    it('renders correctly', async () => {
        const tree = renderer.create(<Login />).toJSON();
        await expect(tree).toMatchSnapshot();
    });
});