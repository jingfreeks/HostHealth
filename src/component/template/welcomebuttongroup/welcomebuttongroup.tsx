import React from 'react';
import Bbutton from '@component/molecules/bbutton/bbutton';
import {ContainerStyled} from './styles';
import {colors} from '@themes';

const WelcomeButtonGroup = props => {
  const {signInPress, signUpPress} = props;
  return (
    <ContainerStyled>
      <Bbutton
        onPress={signUpPress}
        border={10}
        bcolor={'#d6f3f3'}
        title="SIGN UP"
      />
      <Bbutton
        onPress={signInPress}
        border={10}
        bcolor={colors.primary}
        title="SIGN IN"
      />
    </ContainerStyled>
  );
};
export default WelcomeButtonGroup;
