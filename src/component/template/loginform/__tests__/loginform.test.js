import React from 'react';
import {render,fireEvent,act,screen} from '@testing-library/react-native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import LoginForm from '../loginform';
import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/node'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('@supabase/supabase-js')

export const handlers = [
  http.get('http://localhost:3500/login', async () => {
    await delay(150)
    return HttpResponse.json({accessToken:'121212',userId:'tesdterer'})
  })
]

const server = setupServer(...handlers)

const login=()=>jest.fn()
const isLoading={loading:false}
const isError={isError:false}
const error={}
const pData={}
const jData = {};
jest.mock('@/slice/authApi',()=>{
  return{
    useLoginMutation:()=>[login,{isLoading:false,isError:false,data:{accessToken:'121212',userId:'tesdterer'}}],
  }
})
jest.mock('@/slice/suggested', () => {
  return {
    useGetJobsQuery: () => [(data = jData), isLoading, isError, error],
  };
});
jest.mock('@/slice/profile',()=>{
  return{
    useGetProfileQuery:()=>[data=pData,isLoading,isError,error],
  }
})
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

beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


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
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
  it('Should not trigger error for correct values', async() => {
    const all = render(<LoginForm />);
    const el = all.getByTestId('LoginFormSignInpButtonId');
    fireEvent.changeText(all.getByTestId('UserNameTextInput'),'testing');
    fireEvent.changeText(all.getByTestId('PasswordTextInput'),'testing');
    await act(async () => {
      // fireEvent(el, 'press');
      fireEvent(el, 'onPress');
    });
    expect(all.toJSON()).toBeTruthy();
  });

});
