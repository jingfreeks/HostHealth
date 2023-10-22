import React from 'react';
import type {HContainerProps} from './types';
import {Container} from './styles';

const HContainerScreen = (props: HContainerProps) => {
  const {children} = props;
  return <Container>{children}</Container>;
};

export default HContainerScreen;
