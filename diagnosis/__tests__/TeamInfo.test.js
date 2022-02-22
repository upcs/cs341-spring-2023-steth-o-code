import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TeamInfo from '../screens/TeamInfo';

describe('<TeamInfo />', function() {
    test('renders correctly', function() {
        const tree = renderer.create(<TeamInfo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('social icon works', function() {
        const press = jest.fn();
        const {getByTestId} = render(<TeamInfo onPress={{ press }} />);
        const twitter = getByTestId('twitter');
        expect(twitter).toBeTruthy();
        fireEvent.press(twitter);
        expect(press).toHaveBeenCalledTimes(1);
    })
});