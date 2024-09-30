import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Department,DepartmentForm} from '../department';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('Department admin screen', () => {

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
    const all = renderWithProviders(<Department />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<DepartmentForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
