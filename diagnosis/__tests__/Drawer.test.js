import React from 'react';
import renderer from 'react-test-renderer';
import DrawerNavigator from './../navigators/DrawerNavigator';

describe('< DrawerNavigator/>', () => {
    //need to create still 
    it('renders correctly', () => {
        const tree = renderer.create(<DrawerNavigator />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});