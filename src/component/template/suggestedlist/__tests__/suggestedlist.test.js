import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import SuggestedList from '../suggestedlist';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('Suggested List Template Component', () => {
  fetch.mockResponse(
    JSON.stringify([
      {
        __v: 0,
        _id: '66f54f826d56c57bb6ccf641',
        address: 'Metro Manila',
        name: 'Bank of Philippine Island',
      },
    ]),
  );
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<SuggestedList />);

    expect(all.toJSON()).toMatchSnapshot();
  });
});
