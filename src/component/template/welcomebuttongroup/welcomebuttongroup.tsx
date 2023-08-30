import React from 'react';
import Bbutton from '@/component/molecules/bbutton/bbutton';
import {ContainerStyled} from './styles';
import type {WelcomeButtonGroupProps} from './types';
import {colors} from '@/utils/themes';

const WelcomeButtonGroup = (props: WelcomeButtonGroupProps) => {
  const {signInPress, signUpPress} = props;
  return (
    <ContainerStyled>
      <Bbutton
        bcolor={'#d6f3f3'}
        border={10}
        title="SIGN UP"
        onPress={signUpPress}
      />
      <Bbutton
        bcolor={colors.primary}
        border={10}
        title="SIGN IN"
        onPress={signInPress}
      />
    </ContainerStyled>
  );
};
export default WelcomeButtonGroup;
