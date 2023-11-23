import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import TextInput from '../textinput';

describe('Text Input Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<TextInput />);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work as expected to set text type to password to get snapshot', () => {
    const all = render(<TextInput type="password"/>);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work as expected to trigger show password when press the visible icon', () => {
    const all = render(<TextInput type="password"/>);
    const el = all.getByTestId('MaterialsIconShowPasswordTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
