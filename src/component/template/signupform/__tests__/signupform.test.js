import React from 'react';
import {render} from '@testing-library/react-native';
import Signupform from '../signupform';

describe('Login Content Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Signupform />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
