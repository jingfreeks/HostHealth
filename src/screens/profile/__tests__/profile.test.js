import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {fireEvent,render} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';

import Profile from '../profile';

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
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
describe('Profile Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Profile />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should work as expected to trigger logout button', () => {
    const all = renderWithProviders(<Profile />);
    const el=all.getByTestId('ProfileLogoutButton')
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

});
