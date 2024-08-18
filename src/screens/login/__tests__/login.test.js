import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';

import Login from '../login';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
describe('Login Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Login />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
