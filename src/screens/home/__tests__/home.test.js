import React from 'react';
import {waitFor,act} from '@testing-library/react-native'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import Home from '../home';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js')
jest.useFakeTimers();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      navigate: () => {},
      addListener:()=>jest.fn()
    }),
    useIsFocused: () => true,
    useDispatch: () => ({dispatch: jest.fn()}),
  };
});
// jest.mock('@supabase/supabase-js');

describe('Home Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Home />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
    const el=all.getByTestId('HomeScreenOnRefreshTestId')
  });

  it('Should work as to trigger refresh function', async() => {
    const all = renderWithProviders(<Home />);

    const el=all.getByTestId('HomeScreenOnRefreshTestId')
    expect(el).toBeDefined();
    const {refreshControl} = el.props;
    await act(async () => {
      refreshControl.props.onRefresh();
    });
    // waitFor(() => {
    //   expect(all.toJSON()).toBeTruthy();
    // });
  });
});

