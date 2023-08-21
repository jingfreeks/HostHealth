import styled from 'styled-components/native';
import {ImageURISource} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {Text} from '@/component/atoms/text';
import {colors} from '@/utils/themes';
export const Container = styled.View`
  flex: 1;
  align-self: stretch;
  border-width: 1px;
  border-color: ${colors.lightgray};
  border-radius: 15px;
  margin-top: 20px;
`;

export const ImageStyled = styled.Image<{
  source?: string | ImageURISource | undefined;
  resizeMode: 'contain' | 'stretch';
}>`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex: 1;
`;

export const ImageHeaderContainer = styled.View`
  flex: 1;
  height: ${verticalScale(110)}px;
`;

export const FavoriteContainerStyled = styled.View`
  position: absolute;
  right: 0px;
  background-color: ${colors.lightergreen};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-direction: row;
`;
export const FavoriteImageContainer = styled.View`
  padding: 10px;
`;

export const LocationContainerStyled = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
  flex-direction: row;
`;

export const LocationTextStyled = styled(Text)`
  font-weight: 800;
  font-size: 12px;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const MatchTextStyled = styled(Text)`
  font-weight: 800;
  font-size: 20px;
  color: ${colors.primary};
  margin: 10px;
`;
export const JobInfoContainerStyled = styled.View`
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const JobInfoTextContainerStyled = styled.View`
  flex: 4;
`;

export const JobTextSubTitleStyled = styled(Text)`
  font-style: italic;
  font-size: 12px;
  font-weight: 900;
  color: ${colors.semiblack};
  margin-top: 5px;
`;

export const MatchContainersStyled = styled.View`
  border-radius: 15px;
  background-color: ${colors.cyan};
  align-items: center;
  justify-content: center;
`;

export const MatchSubTextStyled = styled(Text)`
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
`;
export const MatchContainerStyled = styled.View`
  align-items: flex-end;
  margin-right: 10px;
`;

export const DeptContainerStyled = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const DeptTitleTextStyled = styled(Text)`
  font-size: 12px;
  font-weight: 500;
`;
export const DeptImageContainerStyled = styled.View`
  align-self: center;
  margin-right: 10px;
`;
export const WeeksContaienrStyled = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 5px;
`;
export const WeeksTitleTextStyled = styled(Text)`
  font-size: 12px;
  font-weight: 900;
`;
export const ShiftContainerStyled = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-left: 10px;
`;

export const EstimatedContainerStyled = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const EstimatedTextStyled = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};
  margin-right: 10px;
`;

export const EstimatedAmount = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.black};
  margin-right: 5px;
`;

export const SubmitContainerStyled = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
