import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import LoginForm from '../loginform';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('@supabase/supabase-js')
const login=()=>jest.fn()
const isLoading={loading:false}
const isError={isError:false}
const error={}
const pData={}
jest.mock('@/slice/authApi',()=>{
  return{
    useLoginMutation:()=>[login,isLoading],
  }
})

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
});
