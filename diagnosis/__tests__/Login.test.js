import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../screens/Login';

describe('<Login />', () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    }); 
    test('authenticates on valid inputs', async () => {
        const {queryByTestId, getByTestId} = render(<Login/>);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        act(() =>{
            fireEvent.changeText(username, 'HelloWorld');
            fireEvent.changeText(password, 'PDXRules!!');
            fireEvent.press(getByTestId('loginbutton'));
        });
        await waitFor(() => {
            expect(queryByTestId('msg-box')).toBeNull();
            expect(queryByTestId('activitybutton')).toBeTruthy();
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
            expect(queryByTestId('msgbox')).toBeTruthy();
            expect(queryByTestId('msgbox')).toHaveTextContent('Please fill out all the fields above.');
            expect(queryByTestId('activitybutton')).toBeNull();
        });
    });
});