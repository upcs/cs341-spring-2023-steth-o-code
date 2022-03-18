import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Linking } from 'react-native';
import renderer from 'react-test-renderer';
import TeamInfo from '../screens/TeamInfo';

jest.mock("react-native/Libraries/Linking/Linking", () => ({
    openURL: jest.fn(() => Promise.resolve("mockResolve")),
}));

describe('<TeamInfo />', function() {
    test('renders correctly', function() {
        const tree = renderer.create(<TeamInfo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('social icon works', function() {
        const {getByTestId} = render(<TeamInfo />);
        const twitter = getByTestId('twitter');
        expect(twitter).toBeTruthy();
        fireEvent.press(twitter);
        expect(Linking.openURL).toHaveBeenCalledTimes(1);
    })
});