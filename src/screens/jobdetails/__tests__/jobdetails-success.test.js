import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import JobDetails from '../jobdetails';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
jest.mock('@/slice/jobdetails', () => ({
  useGetJobDetailsQuery: () => ({
    isLoading: false,
    isSuccess: true,
    data: {
      image:
        'https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=1800&t=st=1701065844~exp=1701066444~hmac=c3febfb337e464bfef544f73469ab9e90ca1c5a01a059870f3fe9f4e2181243a',
      compaddress: '900  Fruit Street, Boston, MA 02114',
      jobtitle: 'Medical Doctor',
      joborderno: '500',
      compname: 'Medley Medical Hospital',
      salaryrange: '$2500-3500',
      shift: 'shiftname',
      jobId: '2333121212',
    },
  }),
}));
jest.mock('../hooks', () => ({
  useJobDetailsHooks: () => ({setIsVisible: jest.fn(), isVisible: true}),
}));
describe('Job Details loading actions Screen', () => {
  const props = {
    route: {
      params: {
        jobdetail: {
          jobId: '',
          _id: '',
        },
      },
    },
  };
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<JobDetails {...props} />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<JobDetails {...props} />);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work to trigger submit button', () => {
    const all = renderWithProviders(<JobDetails {...props} />);
    const el = all.getByTestId('JobDetailsScreenSubmitButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should work to trigger alert modal ok submit button', () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          __v: 0,
          _id: '655f656dbed03fb0a5baddf0',
          name: 'San Francisco',
          address: 'test address',
          state: '655f48446bdacc1843348d7a',
        },
      ]),
    );
    const all = renderWithProviders(<JobDetails {...props} />);
    const el = all.getByTestId('JobDetailsScreenSubmitButtonTestId');
    fireEvent(el, 'onPress');
    const el1 = all.getByTestId(
      'JobDetailsScreenAlertModalSubmitOkButtonTestId',
    );
    fireEvent(el1, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
  it('Should work to trigger to close Alert modal button', () => {
    const all = renderWithProviders(<JobDetails {...props} />);
    const el = all.getByTestId('JobDetailsScreenSubmitButtonTestId');
    fireEvent(el, 'onPress');
    const el1 = all.getByTestId('JobDetailsAlertModalTestId');
    fireEvent(el1, 'onRequestClose');
    expect(all.toJSON()).toBeTruthy();
  });
});
