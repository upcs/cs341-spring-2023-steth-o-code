//https://reactnative.dev/docs/testing-overview
//https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
import React from 'react';
import renderer from 'react-test-renderer';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import Multimedia from '../screens/Multimedia';

export let isEnabled, selectedIndex;

beforeAll(() => {
  isEnabled = false;
  selectedIndex = 0;
})

describe('<Multimedia />', () => {
  test("test Render", async () => {
      renderer.create(<Multimedia />);
  });

  test('test Switch', async () => {
    const {getByTestId} = render(<Multimedia />);
    expect(isEnabled).toBe(false);//default

    act(() =>{
      fireEvent.press(getByTestId('switch'));
    });
    await waitFor(() => {
      expect(isEnabled).toBe(true);//true if clicked
    });
  });
  /*
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
  });*/
});