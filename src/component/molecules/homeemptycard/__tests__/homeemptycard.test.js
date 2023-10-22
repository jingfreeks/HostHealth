import React from 'react';
import {render} from '@testing-library/react-native';
import HomeEmptyCard from '../homeemptycard';

describe('Home Empty Card Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<HomeEmptyCard />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
