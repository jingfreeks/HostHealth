import React from 'react';
import {render} from '@testing-library/react-native';
import Formtextcontroller from '../formtextcontroller';

describe('Form Text Controller Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Formtextcontroller />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
