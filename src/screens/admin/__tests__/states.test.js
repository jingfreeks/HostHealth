import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {State,StateForm} from '../state';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('State admin screen', () => {

  fetch.mockResponse(
    JSON.stringify([
      {
        __v: 0,
        _id: '655f656dbed03fb0a5baddf0',
        title: 'Morning',
      },
    ]),
  );
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