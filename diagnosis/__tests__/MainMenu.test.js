import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import MainMenu from '../screens/MainMenu';

describe('<MainMenu />', () => {

    test('renders correctly', () => { // test screen rendering
        const tree = renderer.create(<MainMenu/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('test button 1', function() { // test button one links correctly
        const navigate = jest.fn();
        const {queryByTestId} = render(<MainMenu navigation={{navigate}}/>);
        const buttonOne = queryByTestId('buttonOne');
        expect(buttonOne).toBeTruthy();
        fireEvent.press(buttonOne);
        expect(navigate).toHaveBeenCalledWith('KnowledgeTest');        
    });

    test('test button 2', function() { // test button two links correctly
        const navigate = jest.fn();
        const {queryByTestId} = render(<MainMenu navigation={{navigate}}/>);
        const buttonTwo = queryByTestId('buttonTwo');
        expect(buttonTwo).toBeTruthy();
        fireEvent.press(buttonTwo);
        expect(navigate).toHaveBeenCalledWith('Lectures');        
    });

    test('test button 3', function() { // test button three links correctly
        const navigate = jest.fn();
        const {queryByTestId} = render(<MainMenu navigation={{navigate}}/>);
        const buttonThree = queryByTestId('buttonThree');
        expect(buttonThree).toBeTruthy();
        fireEvent.press(buttonThree);
        expect(navigate).toHaveBeenCalledWith('Community');        
    });

    test('test button 4', function() { // test button four links correctly
        const navigate = jest.fn();
        const {queryByTestId} = render(<MainMenu navigation={{navigate}}/>);
        const buttonFour = queryByTestId('buttonFour');
        expect(buttonFour).toBeTruthy();
        fireEvent.press(buttonFour);
        expect(navigate).toHaveBeenCalledWith('TeamInfo');        
    });

    test('test button 5', function() { // test button five links correctly
        const navigate = jest.fn();
        const {queryByTestId} = render(<MainMenu navigation={{navigate}}/>);
        const buttonFive = queryByTestId('buttonFive');
        expect(buttonFive).toBeTruthy();
        fireEvent.press(buttonFive);
        expect(navigate).toHaveBeenCalledWith('AboutUs');        
    });


});