import React from 'react';
import {Container, SafeAreaViewStyled} from './styles';
import type {VContainerProps} from './types';
const VContainerScreen = (props: VContainerProps) => {
  const {children, alignType = 'flex-start'} = props;
  return (
    <SafeAreaViewStyled>
      <Container alignType={alignType}>{children}</Container>
    </SafeAreaViewStyled>
  );
};

export default VContainerScreen;
