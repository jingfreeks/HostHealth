import React from 'react';
import {render} from '@testing-library/react-native';
import HomeCard from '../homecard';

describe('HomeCard Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<HomeCard />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
