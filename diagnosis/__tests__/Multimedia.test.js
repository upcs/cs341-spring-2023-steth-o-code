import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import MultiMedia from '../screens/Multimedia';

describe('<MultiMedia/>', () => {
    
    test('renders correctly', async () => {
        const tree = renderer.create(<MultiMedia/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('button response', async () => {
        const {getByTestId} = render(<MultiMedia />);
        const vidButton = getByTestId('vidButton');
        fireEvent.press(vidButton);
        expect(vidButton).toBeTruthy();
    });

});