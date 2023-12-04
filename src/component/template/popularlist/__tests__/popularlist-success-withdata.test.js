import React from 'react';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import Popularlist from '../popularlist';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
jest.useFakeTimers();
jest.mock('@/slice/city', () => ({
  useGetCityQuery: () => ({
    isLoading: false,
    isSuccess: true,
    isError: false,
    city: {
      _id: '655f656dbed03fb0a5baddf0',
      name: 'San Francisco',
      state: '655f48446bdacc1843348d7a',
      image:
        'https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?w=1060&t=st=1691142282~exp=1691142882~hmac=9a8088f4cc3274f95a936542763c9011320371fbc6b6534ee5f2d6e4108d8895',
      statename: 'California',
      matches: '15',
      salary: '$2,659',
    },
    data: {
      ids: ['655f66b8df64e78176c1bb6a', '655f656dbed03fb0a5baddf0'],
    },
  }),
}));
describe('Popular List Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Popularlist />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
