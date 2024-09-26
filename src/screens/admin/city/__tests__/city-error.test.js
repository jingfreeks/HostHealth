

import React from 'react'
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {City} from '../index';


const deleteCity=()=>jest.fn()
jest.mock('@/slice',()=>{
  return{
    useGetCityQuery:()=>({
      isLoading:false,
      isSuccess:false,
      isError:true,
      error:{
        status:404
      },
      data:[]
    }),
    useDeleteCityMutation: () => [
      deleteCity,
      {isLoading: false, isError: false},
    ],
  }
})
describe('City admin Error screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<City />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<City />);
    const el = all.getByTestId('CityCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

});
