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
} from 'react-hook-form';
import {FormTextController} from '@/component/molecules/formtextcontroller';
import {yupResolver} from '@hookform/resolvers/yup';
import {Schema} from './schema';
import * as yup from 'yup';

const SignupFormScreen = (props: {handleSignUp: () => void}) => {
  const {handleSignUp} = props;
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword: '',
    },
    resolver: yupResolver(Schema),
  });
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollViewContainer>
          <TextInputContainerStyled>
            <FormTextController
              Label="First Name"
              name="firstname"
              placeholder="First Name"
              rules={{
                required: true,
              }}
            />
            <FormTextController
              Label="Last Name"
              name="lastname"
              placeholder="Last Name"
              rules={{
                required: true,
              }}
            />
            <FormTextController
              Label="Email"
              name="email"
              placeholder="Email Address"
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
            {/* <TextInput Label="Password Confirm" type="password" /> */}
          </TextInputContainerStyled>
          <Bbutton
            bcolor={colors.lightergreen}
            border={10}
            title="SIGN UP"
            // onPress={handleSignUp}
            onPress={formMethod.handleSubmit(handleSignUp)}
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
