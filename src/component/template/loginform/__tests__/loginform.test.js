import React from 'react';
import {render} from '@testing-library/react-native';
import LoginForm from '../loginform';

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
describe('Login Form  Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<LoginForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
