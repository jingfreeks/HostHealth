import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks} from '../index';


const deleteBanks=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetBanksQuery:()=>({
      isLoading:false,
      isSuccess:true,
      isError:false,
      data:[]
    }),
    useDeleteBanksMutation:()=>[deleteBanks,{isLoading:false,isError:false}],
  }
})
describe('Banks admin empty screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Banks />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Banks />);
    const el=all.getByTestId('BanksCreateButtonTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
