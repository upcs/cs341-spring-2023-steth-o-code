import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import AboutUs from '../screens/AboutUs';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<AboutUs />', () => {
    test("it should render correctly", () => {
        renderer.create(<AboutUs />);
    });
    test("user can scroll through text", () => {
        const { getByTestId } = render(<AboutUs />);
        fireEvent.scroll(getByTestId('text-scroll'), { target: { scrollY: 300 }});
    });
});