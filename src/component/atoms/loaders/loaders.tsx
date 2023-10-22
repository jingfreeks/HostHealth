import React from 'react';
import {ActivityIndicatorStyled} from './styles';
import type {LoaderTypes} from './types';
const Loaders = (props: LoaderTypes) => {
  const {color = '#0000ff', size = 'small'} = props;
  return <ActivityIndicatorStyled color={color} size={size} />;
};
export default Loaders;
