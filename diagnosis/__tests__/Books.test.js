import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Books from '../screens/Books';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Books />', () => {
    test("renders correctly", async () => {
        const tree = renderer.create(<Books />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("linking works", async () => {
        fireEvent.press(getByTestId('book1'));
        expect(Linking.openURL).toHaveBeenCalledTimes(1);
    });
});