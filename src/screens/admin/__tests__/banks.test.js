import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks} from '../banks';
describe('Banks admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Banks />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
