import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import Myjobs from '../myjobs';

import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
jest.mock('@/slice/myjobs',()=>({
  useGetMyJobsQuery:()=>{
    return{
      isSuccess:false,
      refetch:jest.fn(),
      isLoading:false,
      isError:false
    }
  }
}))
describe('My Jobs Screen', () => {
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

    const all = renderWithProviders(<Myjobs />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
