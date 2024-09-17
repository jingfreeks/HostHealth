import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {City} from '../city';
describe('City admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<City />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
