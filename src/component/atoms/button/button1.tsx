import React from 'react';
import {ButtonContainer, ContainerStyled} from './styles';
import {testingProps} from '@/utils/testframework';
import type {ButtonProps} from './types';
// import {colors} from '@/utils/themes';
const Button1 = (props: ButtonProps) => {
  const {
    children,
    bcolor,
    border,
    onPress,
    padding = 15,
    testId = 'AtomsButtonTestId',
  } = props;
  return (
    <ButtonContainer
      bcolor={bcolor}
      border={border}
      padding={padding}
      {...testingProps(testId)}
      onPress={onPress}>
        {children}
    </ButtonContainer>
  );
};
export default Button1;
