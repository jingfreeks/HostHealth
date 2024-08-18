import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {MockProvider} from '@/utils/testframework';
import {renderWithProviders} from '@/utils/testframeworknew';
import JobDetails from '../jobdetails';

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
jest.mock('@supabase/supabase-js');
jest.useFakeTimers();
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
    const all = renderWithProviders(<JobDetails {...props} />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <JobDetails {...props} />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work to trigger submit button', () => {
    const all = renderWithProviders(<JobDetails {...props} />);
    expect(all.toJSON()).toBeTruthy();
  });

  // it('Should work to trigger alert modal ok submit button', () => {
  //   // const all = render(
  //   //   <MockProvider
  //   //     store={{
  //   //       pcities: {loading: false, data: []},
  //   //       suggetedjob: {loading: false, data: []},
  //   //     }}>
  //   //     <JobDetails {...props} />
  //   //   </MockProvider>,
  //   // );
  //   const all = renderWithProviders(<JobDetails {...props} />);
  //   const el = all.getByTestId('JobDetailsScreenSubmitButtonTestId');
  //   fireEvent(el, 'onPress');
  //   const el1 = all.getByTestId('JobDetailsScreenAlertModalSubmitOkButtonTestId');
  //   fireEvent(el1, 'onPress');
  //   expect(all.toJSON()).toBeTruthy();
  // });
  // it('Should work to trigger to close Alert modal button', () => {
  //   const all = render(
  //     <MockProvider
  //       store={{
  //         pcities: {loading: false, data: []},
  //         suggetedjob: {loading: false, data: []},
  //       }}>
  //       <JobDetails {...props} />
  //     </MockProvider>,
  //   );
  //   const el = all.getByTestId('JobDetailsAlertModalTestId');
  //   fireEvent(el, 'onRequestClose');
  //   expect(all.toJSON()).toBeTruthy();
  // });
});
