import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {State} from '../index';


const deleteState=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetStateQuery:()=>({
      isLoading:false,
      isSuccess:true,
      isError:false,
      data:[]
    }),
    useDeleteStatesMutation:()=>[deleteState,{isLoading:false,isError:false}],
  }
})
describe('City admin empty screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<State />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<State />);
    const el=all.getByTestId('StateCreateButtonTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
