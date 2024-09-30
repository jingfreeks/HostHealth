import React from 'react';
import {fireEvent,act} from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import Myjobs from '../myjobs';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
jest.useFakeTimers();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      navigate: () => {},
    }),
    useIsFocused: () => true,
    useDispatch: () => ({dispatch: jest.fn()}),
  };
});

jest.mock('@/slice/myjobs',()=>({
  useGetMyJobsQuery:()=>{
    return{
      isSuccess:true,
      refetch:jest.fn(),
      isLoading:false,
      data:{ids:['1233323333','23444232323']},
      myjobs: {
        __v: 0,
        _id: '1233323333',
        address: 'Metro Manila',
        name: 'Bank of Philippine Island',
      }
    }
  }
}))
describe('My Jobs Screen', () => {
  
  it('Should work as expected to get snapshot', () => {

    const all = renderWithProviders(<Myjobs />,{
      preLoadedState:{auth:{userId:'2331222222'}}
    });
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
  it('Should work to trigger on flatlist on Refresh function', async() => {

    const all = renderWithProviders(<Myjobs />);
    const el = all.getByTestId('MyJobsListingTestId')
    const {refreshControl} = el.props;
    await act(async () => {
      refreshControl.props.onRefresh();
    });
    // fireEvent(el,onRefresh)
    // waitFor(() => {
    //   expect(all.toJSON()).toBeTruthy();
    // });
  });
});
