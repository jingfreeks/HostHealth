import React from 'react';
import {render} from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import Myjobs from '../myjobs';

//set mock to loading true
jest.mock('@/slice/myjobs',()=>({
  useGetMyJobsQuery:()=>{
    return{
      isSuccess:false,
      refetch:jest.fn(),
      isLoading:false,
      isError:true,
      error:{
        status:403
      }
    }
  }
}))
describe('My Jobs Screen', () => {
  it('Should work as expected to get snapshot', () => {

    const all = renderWithProviders(<Myjobs />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
