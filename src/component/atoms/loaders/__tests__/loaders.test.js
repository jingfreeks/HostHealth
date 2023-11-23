import React from 'react';
import {render} from '@testing-library/react-native';
import Loaders from '../loaders';

describe('atoms loaders Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Loaders  />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
