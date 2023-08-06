import React from 'react';
import {ButtonContainer, ContainerStyled} from './styles';
// import {colors} from '@themes';
const Button = ({
  children,
  bcolor,
  border,
  borderw = 2,
  borderc = '#99E1E1',
  onPress,
  padding = 15,
}) => {
  return (
    <ContainerStyled border={border} borderc={borderc} borderw={borderw}>
      <ButtonContainer
        bcolor={bcolor}
        border={border}
        padding={padding}
        onPress={onPress}>
        {children}
      </ButtonContainer>
    </ContainerStyled>
  );
};
export default Button;
