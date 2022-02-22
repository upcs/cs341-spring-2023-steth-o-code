/**
 * Test for Topics
 */

 import React from 'react';
 import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
 import renderer from 'react-test-renderer';
 import Topics from '../screens/Topics';

 describe('<Topics />', () => {
     test("renders correctly", async() => {
         renderer.create(<Topics />);
     });

 });