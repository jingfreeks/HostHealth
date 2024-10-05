

import React from 'react'
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {City} from '../index';


const deleteCity=()=>jest.fn()
const addCity=()=>jest.fn()
const updateCity=()=>jest.fn()
const uploadProfile=()=>jest.fn()
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
    useAddCityMutation:()=>[addCity,{isLoading:false,isError:false}],
    useUpdateCityMutation:()=>[updateCity,{isLoading:false,isError:false}],
    useUploadProfileMutation:()=>[uploadProfile,{isLoading:false,isError:false}],
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
