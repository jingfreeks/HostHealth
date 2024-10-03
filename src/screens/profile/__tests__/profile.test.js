import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';

import Profile from '../profile';

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary:jest.fn(),
}));
describe('Profile Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Profile />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should work as expected to trigger logout button', () => {
    const all = renderWithProviders(<Profile />);
    const el=all.getByTestId('ProfileLogoutButton')
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

});
