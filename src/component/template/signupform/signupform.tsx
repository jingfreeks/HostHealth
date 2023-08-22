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
const SignupFormScreen = (props: {handleSignUp: () => void}) => {
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
          bcolor={colors.lightergreen}
          border={10}
          title="SIGN UP"
          onPress={handleSignUp}
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
