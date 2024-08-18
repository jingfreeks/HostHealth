import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import Welcome from '../welcome';

jest.mock('../hooks', () => {
  return {
    UseWelcomeHooks: () => {
      return {
        handleSignIn: jest.fn(),
        handleSignUp: jest.fn(),
      };
    },
  };
});
describe('Welcome Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Welcome />);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work to trigger sign in button press', () => {
    const all = renderWithProviders(<Welcome />);
    const el = all.getByTestId('WelcomeButtonGroupTestID');
    fireEvent(el, 'signInPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should work to trigger sign up button press', () => {
    const all = renderWithProviders(<Welcome />);
    const el = all.getByTestId('WelcomeButtonGroupTestID');
    fireEvent(el, 'signUpPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
