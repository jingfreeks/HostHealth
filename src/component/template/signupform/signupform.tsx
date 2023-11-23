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
import {Schema} from './schema';
import {UseSignUpHooks} from '@/screens/signup/hooks';
import * as yup from 'yup';

const SignupFormScreen = (props: {handleSignUp: (params: {username:string,password:string}) => void}) => {
  const {handleSignUp} = props;
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
      cpassword: '',
    },
    resolver: yupResolver(Schema),
  });
  const {loading} = UseSignUpHooks();

  const onSubmit: SubmitHandler<FormData> = data => {
    handleSignUp({username: data.username, password: data.password});
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
            loaders={loading}
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
