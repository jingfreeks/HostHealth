import React from 'react';
import {
  Container,
  TextContainer,
  ImageContainerstyled,
  ImageHeaderStyled,
} from './styles';
import type {HomecardProps} from './types';
import {Text} from '@/component/atoms/text';
const HomeCardScreen = (props: HomecardProps) => {
  const {imgsource, title, subtitle} = props;
  return (
    <Container>
      <ImageContainerstyled>
        <ImageHeaderStyled resizeMode="stretch" size={50} source={imgsource} />
      </ImageContainerstyled>
      <TextContainer>
        <Text TextMode="Htitle">{title}</Text>
        <Text TextMode="Stitle">{subtitle}</Text>
      </TextContainer>
    </Container>
  );
};
export default HomeCardScreen;
