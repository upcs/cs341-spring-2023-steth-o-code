import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Books from '../screens/Books';
import {Linking} from 'react-native';

jest.mock("react-native/Libraries/Linking/Linking", () => ({
    openURL: jest.fn(() => Promise.resolve("mockResolve")),
}));

describe('<Books />', () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Books />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});