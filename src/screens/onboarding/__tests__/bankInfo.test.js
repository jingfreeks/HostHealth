import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import {OnBoardingBankInfo} from '../index';

describe('On boarding bankInfo Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<OnBoardingBankInfo />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });

});
