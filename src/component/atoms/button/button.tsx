import React from 'react';
import {ButtonContainer, ContainerStyled} from './styles';
import {testingProps} from '@/utils/testframework'
import type {ButtonProps} from './types';
// import {colors} from '@/utils/themes';
const Button = (props: ButtonProps) => {
  const {
    children,
    bcolor,
    border,
    borderw = 2,
    borderc = '#99E1E1',
    onPress,
    padding = 15,
    testId='AtomsButtonTestId',
    disabled
  } = props;
  return (
    <ContainerStyled border={border} borderc={borderc} borderw={disabled ? 0 :borderw}>
      <ButtonContainer
        bcolor={bcolor}
        border={border}
        padding={padding}
        disabled={disabled}
        {...testingProps(testId)}
        onPress={onPress}>
        {children}
      </ButtonContainer>
    </ContainerStyled>
  );
};
export default Button;
