//https://reactnative.dev/docs/testing-overview
//https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import Multimedia from '../src/screens/Multimedia'

test('should show login form', () => {
    render(<Multimedia />);
    const switchInput = screen.getByTestID('switch');
    const buttonInput = screen.getByTestID('button-group');
    const video = screen.getByTestID('video');

    expect(switchInput).not.toBeNull();
    expect(switchInput).value = true;

    expect(buttonInput).not.toBeNull();
    expect(buttonInput).selectedIndex = 0;

    expect(video).not.toBeNull();
  })