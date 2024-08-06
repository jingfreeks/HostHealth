import React from 'react';
import {TextInput} from '@/component/molecules/textinput';
import {Text} from '@/component/atoms/text';
import Bbutton from '@/component/molecules/bbutton/bbutton';
import {colors} from '@/utils/themes';
import {
  ContainerStyled,
  TextInputContainerStyled,
  ScrollViewContainer,
  AccountTextContainerStyled,
  SignTextStyled,
  SignInButtonStyled,
} from './styles';
import {
  useForm,
  Controller,
  useFormContext,
  FormProvider,
  SubmitHandler,
} from 'react-hook-form';
import {FormTextController} from '@/component/molecules/formtextcontroller';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSignupMutation} from '@/slice/authApi';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {Schema} from './schema';
import * as yup from 'yup';

const SignupFormScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
      cpassword: '',
    },
    resolver: yupResolver(Schema),
  });
  const [signup, {isLoading}] = useSignupMutation();

  const onSubmit: SubmitHandler<FormData> = async data => {
    await signup({username: data.username, password: data.password}).unwrap();
    navigation.navigate('Welcome');
  };
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollViewContainer>
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
            <FormTextController
              Label="Confirm Password"
              name="cpassword"
              placeholder="Confirm Password"
              rules={{
                required: true,
              }}
              type="password"
            />
          </TextInputContainerStyled>
          <Bbutton
            bcolor={colors.lightergreen}
            border={10}
            loaders={isLoading}
            title="SIGN UP"
            onPress={formMethod.handleSubmit(onSubmit)}
          />
          <AccountTextContainerStyled>
            <Text TextMode="TextNormal">Have an account?</Text>
            <SignInButtonStyled>
              <SignTextStyled>Sign In here</SignTextStyled>
            </SignInButtonStyled>
          </AccountTextContainerStyled>
        </ScrollViewContainer>
      </FormProvider>
    </ContainerStyled>
  );
};
export default SignupFormScreen;
