import React from 'react';
import {render, fireEvent, act, screen} from '@testing-library/react-native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import LoginForm from '../loginform';
import {http, HttpResponse, delay} from 'msw';
import {setupServer} from 'msw/node';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const login = () => jest.fn();
const isLoading = {loading: false};
const isError = {isError: false};
const error = {};
const pData = {};
const jData = {};
jest.mock('@/slice/authApi', () => {
  return {
    useLoginMutation: () => [
      login,
      {
        isLoading: false,
        isError: false,
        data: {accessToken: '121212', userId: 'tesdterer'},
      },
    ],
  };
});
jest.mock('@/slice/suggested', () => {
  return {
    useGetJobsQuery: () => [(data = jData), isLoading, isError, error],
  };
});
jest.mock('@/slice/profile', () => {
  return {
    useGetProfileQuery: () => [(data = pData), isLoading, isError, error],
  };
});

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test','test'],
      _defaultValues: ['username','password'],
    },
    getValues: () => {
      return [];
    },
    setValue: () => jest.fn(),
    formState: () => jest.fn(),
    watch: () => jest.fn(),
  }),
  Controller: () => [],
  useSubscribe: () => ({
    r: {current: {subject: {subscribe: () => jest.fn()}}},
  }),
}));
describe('Login Form  Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<LoginForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work as trigger signup handle submit button onPress', () => {
    const all = render(<LoginForm />);
    const el = all.getByTestId('LoginFormSignupButtonId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should work as trigger signin handle submit button onPress', () => {
    const all = render(<LoginForm />);
    const el = all.getByTestId('LoginFormSignInpButtonId');
    // fireEvent.changeText(all.getByTestId('UserNameTextInput'), 'testing');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
  // it('Should not trigger error for correct values', async() => {
  //   const all = render(<LoginForm />);
  //   const el = all.getByTestId('LoginFormSignInpButtonId');
  //   fireEvent.changeText(all.getByTestId('UserNameTextInput'),'testing');
  //   fireEvent.changeText(all.getByTestId('PasswordTextInput'),'testing');
  //   await act(async () => {
  //     // fireEvent(el, 'press');
  //     fireEvent(el, 'onPress');
  //   });
  //   expect(all.toJSON()).toBeTruthy();
  // });
});
