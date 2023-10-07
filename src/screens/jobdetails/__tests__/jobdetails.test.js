import React from 'react';
import {render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
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
});
