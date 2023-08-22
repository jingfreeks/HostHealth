import React from 'react';
import {TextInput} from '@/component/molecules/textinput';
import {Text} from '@/component/atoms/text';
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
const LoginFormScreen = (props: LoginFormProps) => {
  const {signInPress} = props;
  const {handleSignUp} = UseWelcomeHooks();
  return (
    <ContainerStyled>
      <TextInputContainerStyled>
        <TextInput Label="Email" />
        <TextInput Label="Password" type="password" />
      </TextInputContainerStyled>
      <Bbutton
        bcolor={'#d6f3f3'}
        border={10}
        title="SIGN IN"
        onPress={signInPress}
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
    </ContainerStyled>
  );
};

export default LoginFormScreen;
