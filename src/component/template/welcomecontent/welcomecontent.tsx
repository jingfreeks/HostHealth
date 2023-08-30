import React from 'react';
import {TextContainerStyled, ContainerStyled} from './styles';
import {Vcontainer} from '@/component/atoms/vcontainer';
import {LogoHeader} from '@/component/molecules/logoheader';
import type {WelcomeContentProps} from './types';
import {Text} from '@/component/atoms/text';
const WelcomeContentScreen = (props: WelcomeContentProps) => {
  const {title, subTitle} = props;
  return (
    <Vcontainer alignType="center">
      <ContainerStyled>
        <LogoHeader />
        <TextContainerStyled>
          <Text TextMode="Title">{title}</Text>
          <Text>{subTitle}</Text>
        </TextContainerStyled>
      </ContainerStyled>
    </Vcontainer>
  );
};
export default WelcomeContentScreen;
