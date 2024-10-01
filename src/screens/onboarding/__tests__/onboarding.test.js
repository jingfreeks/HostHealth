import React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {waitFor, fireEvent} from '@testing-library/react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {OnBoardingProfile} from '../index';


jest.mock('react-native-image-picker', () => ({
  launchImageLibrary:jest.fn(),
}));

describe('On boarding profile Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<OnBoardingProfile />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
  });

  it('Should to trigger Next Button', () => {
    const all = renderWithProviders(<OnBoardingProfile />);
    const el = all.getByTestId('ProfileNextButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to Avatar Button', () => {
    const all = renderWithProviders(<OnBoardingProfile />);
    const el = all.getByTestId('ProfileAvatarUploadImageTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
