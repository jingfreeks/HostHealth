import styled from 'styled-components/native';
import {colors} from '@/utils/themes';

export const ContainerStyled = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  border-width: 1px;
  border-color: ${colors.lightgray};
  border-radius: 10px;
  margin-top: 20px;
`;

export const InfoContainerStyled = styled.View`
  flex: 3;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TitleContainterStyled = styled.View`
  flex-direction: row;

  padding: 5px;
`;

export const SubtitleContainerStyled = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const ImageContainerStyled = styled.View`
  flex: 1;
`;

export const ImageStyled = styled.Image`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 1;
`;

export const MatchesContainerStyled = styled.View`
  flex: 1;
`;

export const PriceContainerStyled = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;
