import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Login from '../screens/Login';
import axios from 'axios';

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    post: jest.fn()
}));

const navigation = {
    navigate: jest.fn().mockImplementation(() => Promise.resolve()),
}

describe('<Login />', () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    }); 
    test('authenticates on valid inputs', async () => {
        const {queryByTestId, getByTestId} = render(<Login navigation = {navigation}/>);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        act(() =>{
            fireEvent.changeText(username, 'up_admin');
            fireEvent.changeText(password, 'V4AVKOb^6gf4TJvZpbnBtY2D');
            fireEvent.press(getByTestId('loginbutton'));
        });
        await waitFor(() => {
            expect(queryByTestId('msgbox')).toBeTruthy();
            expect(axios.post).toHaveBeenCalledWith("https://up.physicaldiagnosispdx.com/up/app-content/authentication.php", 
                expect.objectContaining({
                    username: username,
                    password: password
                })
            );
        });
    });
    test('it works on invalid password', async () => {
        const {queryByTestId, getByTestId} = render(<Login/>);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        act(() =>{
            fireEvent.changeText(username, 'up_admin');
            fireEvent.changeText(password, 'test_password');
            fireEvent.press(getByTestId('loginbutton'));
        });
        await waitFor(() => {
            expect(queryByTestId('msgbox')).toBeTruthy();
        });
    });
    test('it works on an invalid username', async () => {
        const {queryByTestId, getByTestId} = render(<Login/>);
        const username = queryByTestId('username-input');
        const password = queryByTestId('password-input');
        act(() =>{
            fireEvent.changeText(username, 'tester');
            fireEvent.changeText(password, 'test_password');
            fireEvent.press(getByTestId('loginbutton'));
        });
        await waitFor(() => {
            expect(queryByTestId('msgbox')).toBeTruthy();
        });
    });
    test('it has working buttons w/empty inputs', async () => {
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
        });
    });
    test('signup link takes user to signup', () => {
        const {queryByTestId} = render(<Login navigation={navigation}/>);
        const signUpLink = queryByTestId('signup-link');
        act(() =>{
            fireEvent.press(signUpLink);
        })
        expect(navigation.navigate).toHaveBeenCalledWith("SignUp");
    })
});