import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Activities from '../screens/Activities';

describe('<Activites/>', () => {
    
    test('renders correctly', async () => {
        const tree = renderer.create(<Activities/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});