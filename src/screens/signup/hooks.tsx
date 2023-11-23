import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {SignupPost} from '@/slice/signup';
import type {State} from '@/config/types';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
export const UseSignUpHooks = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const loading = useSelector((state: State) => state.signup.loading);
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleSignUp = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    dispatch(SignupPost({username, password})).then(() => {
      navigation.navigate('Welcome');
    });
  };

  return {
    handleSignUp,
    dispatch,
    loading,
  };
};
