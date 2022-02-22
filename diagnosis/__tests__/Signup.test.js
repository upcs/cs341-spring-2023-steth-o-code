import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Signup from '../screens/Signup';

describe('<Signup />', () => {
    test("has 1 child", () => {
        const tree = renderer.create(<Signup />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('validates on valid inputs', async () => {
        const {queryByTestId} = render(<Signup />);
        const username = queryByTestId('username-new');
        const password = queryByTestId('password-new');
        const email = queryByTestId('email-new');
        const matchingPassword = queryByTestId('matching-password-new');
        act(() =>{
            fireEvent.changeText(username, 'HelloWorld');
            fireEvent.changeText(email, 'testproject@pdx.com')
            fireEvent.changeText(password, 'PDXRules!!');
            fireEvent.changeText(matchingPassword, 'PDXRules!!');
            fireEvent.press(queryByTestId('signup-button'));
        });
        await waitFor(() => {
            expect(queryByTestId('new-username-error')).toBeNull();
            expect(queryByTestId('new-email-error')).toBeNull();
            expect(queryByTestId('new-password-error')).toBeNull();
            expect(queryByTestId('match-password-error')).toBeNull();
        });
    });
    test('it sumbits w/input validation', async () => {
        const {queryByTestId} = render(<Signup />);
        const signUpButton = queryByTestId('signup-button');
        act(() => {
            fireEvent.press(signUpButton);
        });
        await waitFor(() => {
            expect(queryByTestId('new-username-error')).toBeTruthy();
            expect(queryByTestId('new-username-error')).toHaveTextContent('Username is required');
            expect(queryByTestId('new-email-error')).toBeTruthy();
            expect(queryByTestId('new-email-error')).toHaveTextContent('Email is required');
            expect(queryByTestId('new-password-error')).toBeTruthy();
            expect(queryByTestId('new-password-error')).toHaveTextContent('Password is required');
            expect(queryByTestId('match-password-error')).toBeTruthy();
            expect(queryByTestId('match-password-error')).toHaveTextContent('Confirming Password is required');
        });
    });
});