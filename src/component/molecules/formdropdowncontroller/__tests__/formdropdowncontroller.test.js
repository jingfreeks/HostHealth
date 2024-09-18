import React from 'react';
import {render} from '@testing-library/react-native';
import FormDropdowncontroller from '../formdropdowncontroller';

describe('Form Dropdown Controller Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<FormDropdowncontroller />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
