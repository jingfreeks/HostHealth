import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company,CompanyForm} from '../company';

describe('Company admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});

describe('Company Form admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<CompanyForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
