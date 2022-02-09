import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../screens/Signup';

describe('<Signup />', () => {
    test("has 1 child", async () => {
        const tree = renderer.create(<Signup />).toJSON();
        await expect(tree.children.length).toBe(1);
    });

});