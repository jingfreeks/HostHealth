import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {render, fireEvent} from '@testing-library/react-native';
import {State} from '../state';
describe('State admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<State />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
