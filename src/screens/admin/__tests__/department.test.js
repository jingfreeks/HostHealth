import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Department} from '../department';

describe('Department admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Department />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
