import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import Popularlist from '../popularlist';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
jest.mock('@/slice/city',()=>({
  useGetCityQuery:()=>({
    isLoading:true,
    isSuccess:false,
    isError:false,
  })
}))
describe('Popular List Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Popularlist />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
