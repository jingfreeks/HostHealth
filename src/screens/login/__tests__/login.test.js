import React from 'react';
import {render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import Login from '../login';

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
jest.mock('@supabase/supabase-js')
describe('Login Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
          login: {loading: false, data: []},
        }}>
        <Login />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
