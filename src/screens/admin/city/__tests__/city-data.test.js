import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {City} from '../index';

const deleteCity = () => ({data: {}});
jest.mock('@/slice', () => {
  return {
    useGetCityQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      city: {
        __v: 0,
        _id: '655f656dbed03fb0a5baddf0',
        image:
          'https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?w=1060&t=st=1691142282~exp=1691142882~hmac=9a8088f4cc3274f95a936542763c9011320371fbc6b6534ee5f2d6e4108d8895',
        matches: '15',
        name: 'San Francisco',
        salary: '$2,659',
        state: '655f48446bdacc1843348d7a',
        statename: 'California',
      },
      data: {
        entities: {
          '655f656dbed03fb0a5baddf0': {
            __v: 0,
            _id: '655f656dbed03fb0a5baddf0',
            image:
              'https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg?w=1060&t=st=1691142282~exp=1691142882~hmac=9a8088f4cc3274f95a936542763c9011320371fbc6b6534ee5f2d6e4108d8895',
            matches: '15',
            name: 'San Francisco',
            salary: '$2,659',
            state: '655f48446bdacc1843348d7a',
            statename: 'California',
          },
        },
        ids: ['655f656dbed03fb0a5baddf0'],
      },
    }),
    useDeleteCityMutation: () => [
      deleteCity,
      {isLoading: false, isError: false},
    ],
  };
});
describe('City admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<City />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<City />);
    const el = all.getByTestId('CityCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<City />);
    const el = all.getByTestId('CityEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<City />);
    const el = all.getByTestId('CityDeleteFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
