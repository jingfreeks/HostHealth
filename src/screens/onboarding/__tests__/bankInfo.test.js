import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor, fireEvent} from '@testing-library/react-native';
import {OnBoardingBankInfo} from '../index';

jest.mock('../hooks', () => ({
  useOnBoardingHooks: () => ({
    navigation: {goBack: jest.fn()},
    formBankInfo: {handleSubmit:jest.fn()},
  }),
}));
describe('On boarding bankInfo Screen', () => {

  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<OnBoardingBankInfo />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });

  it('Should to trigger Previous Button', () => {
    const all = renderWithProviders(<OnBoardingBankInfo />);
    const el = all.getByTestId('BankInfoPreviousButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Next Button', () => {
    const all = renderWithProviders(<OnBoardingBankInfo />);
    const el = all.getByTestId('BankInfoNextButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
