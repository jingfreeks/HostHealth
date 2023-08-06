import React from 'react';
import {Vcontainer} from '@component/atoms/vcontainer';
import {Text} from '@component/atoms/text';
import {ImageHeaderStyled} from '@navigation/styles';
const HomeEmptyCardScreen = props => {
  const {imgsource, message} = props;
  return (
    <Vcontainer alignType="center">
      <ImageHeaderStyled size={150} source={imgsource} resizeMode={'contain'} />
      <Text TextMode="TextNormal">{message}</Text>
    </Vcontainer>
  );
};
export default HomeEmptyCardScreen;
