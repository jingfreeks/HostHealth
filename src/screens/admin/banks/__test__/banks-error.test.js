

import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks} from '../index';


const deleteBanks=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetBanksQuery:()=>({
      isLoading:false,
      isSuccess:false,
      isError:true,
      error:{
        status:403
      },
      data:[]
    }),
    useDeleteBanksMutation:()=>[deleteBanks,{isLoading:false,isError:false}],
  }
})
describe('Banks admin Error screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Banks />);
    expect(all.toJSON()).toMatchSnapshot();
  });

});
