import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import MainMenu from '../screens/MainMenu';

describe('<MainMenu />', () => {

    test('renders correctly', async () => { // test screen rendering
        renderer.create(<MainMenu />);
    });

    test('test button 1', async () => { // test button one links correctly
        const {queryByTestId} = render(<MainMenu/>);
        const buttonOne = queryByTestId('buttonOne');
        // act(() => {
        //     fireEvent.press(buttonOne);
        // });
        expect(buttonOne).toCall
        // await waitFor(() => {
        //     expect(butt)
        // });
    });
});