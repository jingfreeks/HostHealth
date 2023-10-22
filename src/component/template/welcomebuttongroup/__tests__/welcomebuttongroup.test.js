import React from 'react';
import {render} from '@testing-library/react-native';
import WelcomeButtonGroup from '../welcomebuttongroup';

describe('Welcome Button group Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<WelcomeButtonGroup />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
