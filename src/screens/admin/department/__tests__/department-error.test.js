

import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Department} from '../index';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const deleteDepartment=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetDeptQuery:()=>({
      isLoading:false,
      isSuccess:false,
      isError:true,
      error:{
        status:403
      },
      data:[]
    }),
    useDeleteDeptMutation:()=>[deleteDepartment,{isLoading:false,isError:false}],
  }
})
describe('Banks admin Error screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Department />);
    expect(all.toJSON()).toMatchSnapshot();
  });

});
