import React from 'react';
import {TextInput} from '@/component/molecules/textinput';
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
import type {LoginFormProps} from './types';
import {colors} from '@/utils/themes';
import {yupResolver} from '@hookform/resolvers/yup';
import {Schema} from './schema';
import {UseLoginHooks} from '@/screens/login/hooks';
import * as yup from 'yup';
const LoginFormScreen = (props: LoginFormProps) => {
  const {signInPress = () => {}} = props;
  const {handleSignUp} = UseWelcomeHooks();
  const {loading} = UseLoginHooks();

  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(Schema),
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    signInPress({email: data.email, password: data.password});
  };
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <TextInputContainerStyled>
          <FormTextController
            Label="Email"
            name="email"
            placeholder="Email"
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
          />
        </TextInputContainerStyled>
        <Bbutton
          bcolor={'#d6f3f3'}
          border={10}
          loaders={loading}
          title="SIGN IN"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
        <ForgotPassContainerStyled>
          <Text>Forgot Password?</Text>
        </ForgotPassContainerStyled>
        <AccountContainerStyled>
          <Text TextMode="TextNormal">Forgot Password?</Text>
          <SignUpButtonStyled onPress={handleSignUp}>
            <Text>Sign Up here</Text>
          </SignUpButtonStyled>
        </AccountContainerStyled>
      </FormProvider>
    </ContainerStyled>
  );
};

export default LoginFormScreen;
