import React from 'react';
import renderer from 'react-test-renderer';
import {act, RenderResult, fireEvent, wait, screen, render} from '@testing-library/react';
import Login from '../screens/Login';

describe('<Login />', () => {
    it("has 1 children", async () => {
        const tree = renderer.create(<Login />).toJSON();
        await expect(tree.children.length).toBe(1);
    });
    it('renders correctly', async () => {
        const tree = renderer.create(<Login />).toJSON();
        await expect(tree).toMatchSnapshot();
    });
    // it('submits', () => {
    //     const onSubmit = jest.fn();
    //     render(<Login />);
    //     fireEvent.submit(screen.getAllByTestId("login-form"));
    //     expect(onSubmit).toHaveBeenCalled();
    // });
});