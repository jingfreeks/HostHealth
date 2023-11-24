import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import Pcities from '../pcities';

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
jest.mock('@supabase/supabase-js')
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe('Popular Cities Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Pcities />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
