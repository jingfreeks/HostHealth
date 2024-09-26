import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {setCredentials} from '@/slice/auth';
import {setupstore} from '@/config/store';
import {RootNavigator} from '../index';
describe('Root Navigation screen', () => {
  it('testing on navigating to admin screen', () => {
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
    const all = renderWithProviders(<RootNavigator />, {store});
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('testing on navigating to applicant screen with on boarding is false', () => {
    const store = setupstore();
    store.dispatch(
      setCredentials({
        user: 'testing',
        accessToken: 'testAccesstoken',
        userId: '123344',
        roles: ['Employee'],
        onBoarding: false,
      }),
    );
    const all = renderWithProviders(<RootNavigator />, {store});
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('testing on navigating to applicant screen with on boarding is true', () => {
    const store = setupstore();
    store.dispatch(
      setCredentials({
        user: 'testing',
        accessToken: 'testAccesstoken',
        userId: '123344',
        roles: ['Employee'],
        onBoarding: true,
      }),
    );
    const all = renderWithProviders(<RootNavigator />, {store});
    expect(all.toJSON()).toMatchSnapshot();
  });
});
