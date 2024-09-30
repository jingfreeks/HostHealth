import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company} from '../index';


const deleteCompany=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetCompanyQuery:()=>({
      isLoading:false,
      isSuccess:true,
      isError:false,
      data:[]
    }),
    useDeleteCompanyMutation:()=>[deleteCompany,{isLoading:false,isError:false}],
  }
})
describe('Company admin empty screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Company />);
    const el=all.getByTestId('CompanyCreateButtonTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
