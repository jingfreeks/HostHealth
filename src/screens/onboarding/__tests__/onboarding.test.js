import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor} from '@testing-library/react-native';
import {OnBoardingProfile} from '../index';


describe('On boarding profile Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<OnBoardingProfile />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });
});
