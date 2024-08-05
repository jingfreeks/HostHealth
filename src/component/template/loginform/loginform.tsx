/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {FormTextController} from '@/component/molecules/formtextcontroller';
import {Text} from '@/component/atoms/text';
import {
  useForm,
  Controller,
  useFormContext,
  FormProvider,
  SubmitHandler,
} from 'react-hook-form';
import {
  ContainerStyled,
  TextInputContainerStyled,
  ForgotPassContainerStyled,
  AccountContainerStyled,
  SignUpButtonStyled,
} from './styled';
import {Bbutton} from '@/component/molecules/bbutton';
import {UseWelcomeHooks} from '@/screens/welcome/hooks';
import {yupResolver} from '@hookform/resolvers/yup';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {Schema} from './schema';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {setCredentials} from '@/slice/auth';
import {testingProps} from '@/utils/testframework'
import {useLoginMutation} from '@/slice/authApi';
import * as yup from 'yup';
const LoginFormScreen = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const {handleSignUp} = UseWelcomeHooks();
  const [login, {isLoading}] = useLoginMutation();

  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      const userData: any = await login({
        username: data.username,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({...userData, user: data.username}));
      navigation.navigate('app');
    } catch (error) {
      switch(error.status){
        case 401:
          alert(error.data.message)
          break;
        default:
          alert('error')
      }
    }
  };
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <TextInputContainerStyled>
          <FormTextController
            Label="Username"
            name="username"
            placeholder="Username"
            rules={{
              required: true,
            }}
          />
          <FormTextController
            Label="Password"
            name="password"
            placeholder="Password"
            rules={{
              required: true,
            }}
            type="password"
          />
        </TextInputContainerStyled>
        <Bbutton
          bcolor={'#d6f3f3'}
          border={10}
          loaders={isLoading}
          testId='LoginFormSignInpButtonId'
          title="SIGN IN"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
        <ForgotPassContainerStyled>
          <Text>Forgot Password?</Text>
        </ForgotPassContainerStyled>
        <AccountContainerStyled>
          <Text TextMode="TextNormal">Forgot Password?</Text>
          <SignUpButtonStyled {...testingProps('LoginFormSignupButtonId')}onPress={handleSignUp}>
            <Text>Sign Up here</Text>
          </SignUpButtonStyled>
        </AccountContainerStyled>
      </FormProvider>
    </ContainerStyled>
  );
};

export default LoginFormScreen;
