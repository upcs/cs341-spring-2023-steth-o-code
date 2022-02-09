import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../screens/Login';

describe('<Login />', () => {
    test("has 1 children", async () => {
        const tree = renderer.create(<Login />).toJSON();
        await expect(tree.children.length).toBe(1);
    }); 
    test('validates on valid inputs', async () => {
        const {queryByTestId} = render(<Login />);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        const button = queryByTestId('login-button');
        fireEvent.changeText(username, 'HelloWorld');
        fireEvent.changeText(password, 'PDXRules!!')
        await waitFor(() => {
            expect(queryByTestId('username-error')).toBeNull();
            expect(queryByTestId('password-error')).toBeNull();
        });
    });
});