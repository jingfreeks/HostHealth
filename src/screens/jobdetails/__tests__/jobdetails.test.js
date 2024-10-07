import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import JobDetails from '../jobdetails';
import {setCredentials} from '@/slice/auth'
import {setupstore} from '@/config/store';

describe('Job Details Screen', () => {
  const props = {
    route: {
      params: {
        jobdetail: {
          image: '',
          address: '',
          jobtitle: '',
          joborderno: '',
          company: '',
          salaryrange: '',
          shift: '',
        },
      },
    },
  };
  it('Should work as expected to get snapshot', () => {
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
    const all = renderWithProviders(<JobDetails {...props} />,{store});
    expect(all.toJSON()).toMatchSnapshot();
  });

});
