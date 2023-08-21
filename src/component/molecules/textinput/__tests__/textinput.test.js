import React from 'react';
import {render} from '@testing-library/react-native';
import TextInput from '../textinput';

describe('Text Input Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<TextInput />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
