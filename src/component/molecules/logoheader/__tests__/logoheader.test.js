import React from 'react';
import {render} from '@testing-library/react-native';
import LogoHeader from '../logoheader';

describe('Logo Header Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<LogoHeader />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
