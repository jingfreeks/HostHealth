import React from 'react';
import {Vcontainer} from '@/component/atoms/vcontainer';
import {Text} from '@/component/atoms/text';
import {ImageHeaderStyled} from '@/navigation/styles';
import type {HomeEmptyCardProps} from './types';
const HomeEmptyCardScreen = (props: HomeEmptyCardProps) => {
  const {imgsource, message} = props;
  return (
    <Vcontainer alignType="center">
      <ImageHeaderStyled resizeMode={'contain'} size={150} source={imgsource} />
      <Text TextMode="TextNormal">{message}</Text>
    </Vcontainer>
  );
};
export default HomeEmptyCardScreen;
