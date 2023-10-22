import React from 'react';
import {render} from '@testing-library/react-native';
import PopularCard from '../popularcard';

describe('Popular Card Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <PopularCard
        item={{image: '', city: 'test city', matches: 'test', salary: '$100'}}
      />,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
