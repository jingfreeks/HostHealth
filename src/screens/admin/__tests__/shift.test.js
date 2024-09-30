import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {Shift} from '../shift';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('Shift admin screen', () => {
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
    const all = renderWithProviders(<Shift />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
