import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Signup from '../screens/Signup';

describe('<Signup />', () => {
    test("has 1 child", async () => {
        renderer.create(<Signup />);
    });
    test('validates on valid inputs', async () => {
        const {queryByTestId} = render(<Signup />);
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
    test('it sumbits w/input validation', async () => {
        const {queryByTestId} = render(<Signup />);
        const signUpButton = queryByTestId('signup-button');
        act(() => {
            fireEvent.press(signUpButton);
        });
        await waitFor(() => {
            expect(queryByTestId('username-error')).toBeTruthy();
            expect(queryByTestId('username-error')).toHaveTextContent('Username is required');
            expect(queryByTestId('password-error')).toBeTruthy();
            expect(queryByTestId('password-error')).toHaveTextContent('Password is required');
        });
    });
});