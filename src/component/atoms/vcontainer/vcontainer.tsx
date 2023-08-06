import React from 'react';
import {Container, SafeAreaViewStyled} from './styles';

const VContainerScreen = ({children, alignType = 'flex-start', flex = 0}) => {
  return (
    <SafeAreaViewStyled>
      <Container alignType={alignType} flex={flex}>
        {children}
      </Container>
    </SafeAreaViewStyled>
  );
};

export default VContainerScreen;
