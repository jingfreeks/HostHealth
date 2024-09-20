import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company} from '../company';

describe('Company admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
