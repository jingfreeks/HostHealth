import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import WelcomeButtonGroup from '../welcomebuttongroup';

describe('Welcome Button group Template Component', () => {
  const login=()=>jest.fn()
  const isLoading={loading:false}
  const isError={isError:false}
  const error={}
  const pData={}
  const jData = {};
  jest.mock('@/slice/authApi',()=>{
    return{
      useLoginMutation:()=>[login,isLoading],
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
