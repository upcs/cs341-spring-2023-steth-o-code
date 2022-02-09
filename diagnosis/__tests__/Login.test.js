import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../screens/Login';

describe('<Login />', () => {
    test("renders correctly", async () => {
        renderer.create(<Login />);
    }); 
    test('validates on valid inputs', async () => {
        const {queryByTestId} = render(<Login />);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        act(() =>{
            fireEvent.changeText(username, 'HelloWorld');
            fireEvent.changeText(password, 'PDXRules!!');
        });
        await waitFor(() => {
            expect(queryByTestId('username-error')).toBeNull();
            expect(queryByTestId('password-error')).toBeNull();
        });
    });
    test('it has working buttons w/input validation', async () => {
        const {queryByTestId} = render(<Login />);
        const loginbutton = queryByTestId('loginbutton');
        const wordPressButton = queryByTestId('wordpress-button');
        act(() => {
            fireEvent.press(loginbutton);
            fireEvent.press(wordPressButton);
        });
        await waitFor(() => {
            expect(queryByTestId('username-error')).toBeTruthy();
            expect(queryByTestId('username-error')).toHaveTextContent('Username is required');
            expect(queryByTestId('password-error')).toBeTruthy();
            expect(queryByTestId('password-error')).toHaveTextContent('Password is required');
        });
    });
});