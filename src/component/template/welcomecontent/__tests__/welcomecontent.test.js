import React from 'react';
import {render} from '@testing-library/react-native';
import WelcomeContent from '../welcomecontent';

describe('Welcome Button group Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<WelcomeContent />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
