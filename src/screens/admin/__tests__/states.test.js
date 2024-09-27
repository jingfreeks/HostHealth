import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {State,StateForm} from '../state';
describe('State admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<State />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});

describe('States Form admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<StateForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});