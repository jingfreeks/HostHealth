import React from 'react';
import {Vcontainer} from '@component/atoms/vcontainer';
import {MainLogIcon} from '@assets';
import {ImageHeaderStyled, ImageContainerStyled} from './styles';
const LogoHeader = () => {
  return (
    <Vcontainer alignType="center">
      <ImageContainerStyled>
        <ImageHeaderStyled resizeMode={'contain'} source={MainLogIcon} />
      </ImageContainerStyled>
    </Vcontainer>
  );
};
export default LogoHeader;
