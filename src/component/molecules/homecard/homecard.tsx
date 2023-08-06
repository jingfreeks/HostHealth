import React from 'react';
import {
  Container,
  TextContainer,
  ImageContainerstyled,
  ImageHeaderStyled,
} from './styles';

import {Text} from '@component/atoms/text';
const HomeCardScreen = props => {
  const {imgsource, title, subtitle} = props;
  return (
    <Container>
      <ImageContainerstyled>
        <ImageHeaderStyled size={50} source={imgsource} resizeMode="stretch" />
      </ImageContainerstyled>
      <TextContainer>
        <Text TextMode="Htitle">{title}</Text>
        <Text TextMode="Stitle">{subtitle}</Text>
      </TextContainer>
    </Container>
  );
};
export default HomeCardScreen;
