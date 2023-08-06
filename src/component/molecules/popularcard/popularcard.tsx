import React from 'react';
import {
  ContainerStyled,
  InfoContainerStyled,
  TitleContainterStyled,
  SubtitleContainerStyled,
  ImageContainerStyled,
  ImageStyled,
  MatchesContainerStyled,
  PriceContainerStyled,
} from './styles';
import {Text} from '@component/atoms/text';
const PopularCardScreen = props => {
  const {item} = props;
  return (
    <ContainerStyled>
      <ImageContainerStyled>
        <ImageStyled
          source={{
            uri: item.image,
          }}
          resizeMode={'stretch'}
        />
      </ImageContainerStyled>
      <InfoContainerStyled>
        <TitleContainterStyled>
          <Text TextMode="Ptitle">
            {item.city} <Text TextMode="Pstitle">{item.city}</Text>
          </Text>
        </TitleContainterStyled>
        <SubtitleContainerStyled>
          <MatchesContainerStyled>
            {/* <Text>15 Matches</Text> */}
            <Text TextMode="MtextBold">
              {item.matches} <Text TextMode="Pstitle">Matches</Text>
            </Text>
          </MatchesContainerStyled>
          <Text TextMode="TextNormalBold">{item.salary}</Text>
          <PriceContainerStyled>
            <Text TextMode="TextNormalRegular"> /wk</Text>
          </PriceContainerStyled>
        </SubtitleContainerStyled>
      </InfoContainerStyled>
    </ContainerStyled>
  );
};
export default PopularCardScreen;
