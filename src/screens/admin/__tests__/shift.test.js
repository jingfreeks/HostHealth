import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Shift} from '../shift';

describe('Shift admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Shift />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
