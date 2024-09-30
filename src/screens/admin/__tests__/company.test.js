import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company,CompanyForm} from '../company';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('Company admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});

describe('Company Form admin screen', () => {

  fetch.mockResponse(
    JSON.stringify([
      {
        __v: 0,
        _id: '655f656dbed03fb0a5baddf0',
        name: 'San Francisco',
        address: 'test address',
        state: '655f48446bdacc1843348d7a',
      },
    ]),
  );
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<CompanyForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
