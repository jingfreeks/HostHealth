import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import JobDetails from '../jobdetails';
import {setCredentials} from '@/slice/auth'
import {setupstore} from '@/config/store';

jest.useFakeTimers();
jest.mock('@/slice/jobdetails',()=>({
  useGetJobDetailsQuery:()=>({
    isLoading:true,
  })
}))
jest.mock('../hooks', () => ({
  useJobDetailsHooks: () => ({setIsVisible: jest.fn(), isVisible: true}),
}));
describe('Job Details loading actions Screen', () => {
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

  // it('Should work as expected to get snapshot', () => {
  //   const all = render(
  //     <MockProvider
  //       store={{
  //         pcities: {loading: false, data: []},
  //         suggetedjob: {loading: false, data: []},
  //       }}>
  //       <JobDetails {...props} />
  //     </MockProvider>,
  //   );
  //   expect(all.toJSON()).toMatchSnapshot();
  // });
  // it('Should work to trigger submit button', () => {
  //   const all = renderWithProviders(<JobDetails {...props} />);
  //   // const el = all.getByTestId('JobDetailsScreenSubmitButtonTestId');
  //   // fireEvent(el, 'onPress');
  //   expect(all.toJSON()).toBeTruthy();
  // });

});
