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
const SignupFormScreen = props => {
  const {handleSignUp} = props;
  return (
    <ContainerStyled>
      <ScrollViewContainer>
        <TextInputContainerStyled>
          <TextInput Label="First Name" />
          <TextInput Label="Last Name" />
          <TextInput Label="Email" />
          <TextInput Label="Password" type="password" />
          <TextInput Label="Password Confirm" type="password" />
        </TextInputContainerStyled>
        <Bbutton
          onPress={handleSignUp}
          border={10}
          bcolor={colors.lightergreen}
          title="SIGN UP"
        />
        <AccountTextContainerStyled>
          <Text TextMode="TextNormal">Have an account?</Text>
          <SignInButtonStyled>
            <SignTextStyled>Sign In here</SignTextStyled>
          </SignInButtonStyled>
        </AccountTextContainerStyled>
      </ScrollViewContainer>
    </ContainerStyled>
  );
};
export default SignupFormScreen;
