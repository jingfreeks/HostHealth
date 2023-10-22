import React from 'react';
import {render} from '@testing-library/react-native';
import HomeHeaderlist from '../homeheaderlist';

describe('Home Header list Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<HomeHeaderlist />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
