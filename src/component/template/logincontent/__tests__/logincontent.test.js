import React from 'react';
import {render} from '@testing-library/react-native';
import Logincontent from '../logincontent';

describe('Login Content Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Logincontent />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
