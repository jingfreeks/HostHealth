import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import SuggestedList from '../suggestedlist';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
jest.useFakeTimers();

// import {useGetJobsQuery} from '@/slice/suggested';

const isLoading = {loading: false};
const isError = {isError: false};
const error = {};
const jData = {};

jest.mock('@/slice/suggested', () => {
  return {
    useGetJobsQuery: () => [(data = jData), isLoading, isError, error],
  };
});
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
describe('Suggested List Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<SuggestedList />);

    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work as expected for empty data to get snapshot', () => {
    const all = renderWithProviders(<SuggestedList />);

    expect(all.toJSON()).toMatchSnapshot();
  });
});
