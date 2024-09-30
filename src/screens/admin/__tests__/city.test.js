import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {City, Cityform} from '../city';
import {setupstore} from '@/config/store';
import {setCredentials} from '@/slice/auth';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
describe('City admin screen', () => {
  const store = setupstore();
  store.dispatch(
    setCredentials({
      user: 'testing',
      accessToken: 'testAccesstoken',
      userId: '123344',
      roles: ['Admin'],
      onBoarding: true,
    }),
  );
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<City />, {store});
    expect(all.toJSON()).toMatchSnapshot();
  });
});

describe('City Form admin screen', () => {
  fetch.mockResponse(
    JSON.stringify([
      {
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
    ]),
  );
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Cityform />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
