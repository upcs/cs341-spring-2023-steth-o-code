//https://reactnative.dev/docs/testing-overview
//https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const multi = require('./../screens/Multimedia');

test('test Switch', () => {
  render(<multi />);
  expect(isEnabled).toBe(false);//default
  userEvent.click(screen.getByTestID('switch'))
  expect(isEnabled).toBe(true);//switch if clicked
});

test('test Button Group', () => {
  render(<multi />);
  expect(selectedIndex).toBe(0);//default
  userEvent.click(screen.getByText('Annotated'))
  expect(selectedIndex).toBe(1);//option 1
  userEvent.click(screen.getByText('Narrated'))
  expect(selectedIndex).toBe(2);//option 2
});

test('test Vimeo', () => {
  render(<multi />);
  expect(screen.getByTestID('video')).toBeDefined();//video exists
  //write more test here
})