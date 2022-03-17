import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Books from '../screens/Books';
import {Linking} from 'react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Books />', () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Books />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    // test("linking works", async () => {
    //     const { queryByTestId } = renderer.create(<Books />);
    //     const book = queryByTestId('book1');
    //     fireEvent.press(book);
    //     expect(Linking.openURL).toHaveBeenCalledTimes(1);
    // });
});