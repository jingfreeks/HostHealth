import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {LoginPost} from '@/slice/login';
import type {State} from '@/config/types';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
export const UseLoginHooks = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const loading = useSelector((state: State) => state.login.loading);
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(LoginPost({email, password})).then(() => {
      navigation.navigate('app');
    });
  };

  return {
    handleLogin,
    dispatch,
    loading,
  };
};
