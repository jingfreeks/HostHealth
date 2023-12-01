import React from 'react';
import {render} from '@testing-library/react-native';
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
describe('My Jobs Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Myjobs />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
