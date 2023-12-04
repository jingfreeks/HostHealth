import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
import Welcome from '../welcome';

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
describe('Welcome Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <Welcome />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work to trigger sign in button press', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <Welcome />
      </MockProvider>,
    );
    const el=all.getByTestId('WelcomeButtonGroupTestID')
    fireEvent(el,'signInPress')
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should work to trigger sign up button press', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <Welcome />
      </MockProvider>,
    );
    const el=all.getByTestId('WelcomeButtonGroupTestID')
    fireEvent(el,'signUpPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
