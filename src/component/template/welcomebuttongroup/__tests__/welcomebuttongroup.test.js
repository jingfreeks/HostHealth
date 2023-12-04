import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import WelcomeButtonGroup from '../welcomebuttongroup';

describe('Welcome Button group Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<WelcomeButtonGroup />);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should to trigger signup button On Press', () => {
    const all = render(<WelcomeButtonGroup />);
    const el = all.getByTestId('WelcomeButtonGroupSignUnPressTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
  it('Should to trigger signin button On Press', () => {
    const all = render(<WelcomeButtonGroup />);
    const el = all.getByTestId('WelcomeButtonGroupSignInPressTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
