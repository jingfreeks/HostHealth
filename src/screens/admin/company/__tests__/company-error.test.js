

import React from 'react'
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company} from '../index';


const deleteCompany=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetCompanyQuery:()=>({
      isLoading:false,
      isSuccess:false,
      isError:true,
      error:{
        status:403
      },
      data:[]
    }),
    useDeleteCompanyMutation: () => [
      deleteCompany,
      {isLoading: false, isError: false},
    ],
  }
})
describe('Company admin Error screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });


});
