import React from 'react'
import {renderWithProviders} from '@/utils/testframeworknew';
import {City,Cityform} from '../city';
import {setupstore} from '@/config/store';
import {setCredentials} from '@/slice/auth';
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
    const all = renderWithProviders(<City />,{store});
    expect(all.toJSON()).toMatchSnapshot();
  });
});
describe('City Form admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Cityform />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});