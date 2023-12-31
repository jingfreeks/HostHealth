import React from 'react';
import {render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import Signup from '../signup';

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
describe('Signup Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
          signup: {loading: false, data: []},
        }}>
        <Signup />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
