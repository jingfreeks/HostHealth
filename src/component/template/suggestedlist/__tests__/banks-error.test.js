

import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import SuggestedList from '../suggestedlist';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const deleteBanks=()=>jest.fn()
jest.mock('@/slice/suggested',()=>{
  return{
    useGetJobsQuery:()=>({
      isLoading:false,
      isSuccess:false,
      isError:true,
      error:{
        status:403
      },
      data:[]
    }),
  }
})
describe('Suggested list Error screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<SuggestedList />);
    expect(all.toJSON()).toMatchSnapshot();
  });

});
