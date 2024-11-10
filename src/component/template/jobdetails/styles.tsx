import styled from 'styled-components/native';
import {colors} from '@/utils/themes';
import {Text} from '@/component/atoms/text';
import {verticalScale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  flex: 1;
`;

export const ImageHeaderContaierStyled = styled.View`
  height: ${verticalScale(150)}px;
`;

export const ImageStyled = styled.Image`
  flex: 1;
`;

export const FavoriteContainerStyled = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: ${colors.lightergreen};
  border-radius: 10px;
  flex-direction: row;
`;
export const FavoriteDropdownContainer = styled.View`
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: ${colors.lightergreen};
  border-radius: 10px;
`;
export const FavoriteImageContainer = styled.View`
  padding: 10px;
`;

export const LocationContainerStyled = styled.View`
  position: absolute;
  bottom: 10px;
  left: 20px;
  flex-direction: row;
  background-color: #00000066;
    align-items:center;
  justify-content:center;
  border-radius:3px;
  padding:3px;
`;

export const LocationTextStyled = styled(Text)`
  font-weight: 800;
  font-size: 14px;
  color: ${colors.primary};
  margin-left: 10px;
  margin-right:10px;
`;

export const JobInfoHeaderContainerStyled = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const JobTitleContainerStyled = styled.View`
  flex-direction: row;
`;

export const JobTitleTextStyled = styled(Text)`
  font-weight: 900;
  font-size: 16px;
  color: ${colors.medlightgreen};
  margin-right: 5px;
`;

export const JobNumberTextStyled = styled(JobTitleTextStyled)`
  color: ${colors.black};
`;
export const JobInfoContainerStyled = styled.View`
  flex: 1;
`;

export const JobMatchContainerStyled = styled.View`
  border-radius: 15px;
  background-color: ${colors.cyan};
  align-items: center;
  justify-content: center;
`;

export const JobMatchTextContainerStyled = styled.View`
  align-items: flex-end;
  margin-right: 20px;
`;

export const MatchTextStyled = styled(Text)`
  font-weight: 800;
  font-size: 20px;
  color: ${colors.primary};
  margin: 10px;
`;

export const MatchSubTextStyled = styled(Text)`
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
  color: #008080;
`;

export const CompanyTextStyled = styled(Text)`
  font-style: italic;
  font-size: 12px;
  font-weight: 900;
  color: #3d3d3d;
`;

export const EstimateContainerStyled = styled.View`
  flex-direction: row;
  margin-right: 20px;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const EstimateTitleTextStyled = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};
  margin-right: 5px;
`;

export const EstimateValueTextStyled = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.black};
  margin-left: 5px;
`;

export const DetailsContainerStyled = styled.View`
  margin-bottom: 15px;
  margin-left: 20px;
  flex: 1;
`;

export const LineContainerStyled = styled.View`
  align-self: stretch;
  background-color: ${colors.lightgray};
  height: 1px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;
export const DetailTitleContainerStyled = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DetailsTitleTextStyled = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.blue};
  margin-left: 5px;
`;

export const DetailsSubTitleTextStyled = styled(Text)`
  font-size: 14px;
  font-weight: 900;
  color: ${colors.blue};
  margin-left: 5px;
`;

export const SubDetailsContainerStyled = styled.View`
  flex-direction: row;
`;

export const SubDetailsTitleContainerStyled = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export const SubDetailsDetailsContainerStyled = styled.View`
  flex: 2;
`;

export const RequirementsContainerstyled = styled.View`
  margin-left: 20px;
`;

export const ButtonFooterContainerStyled = styled.View`
  flex-direction: row;
  flex: 1;
  margin-top: 100px;
  margin-bottom: 20px;
`;
export const ButtonContainerStyled = styled.View`
  flex: 1;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: ${colors.primary};
`;

export const BottomSheetStyled = styled.View`
  background-color: red;
  flex: 1;
`;

export const AlertModalStyled = styled.Modal``;

export const AlertModalContainerStyled = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const AlertModalViewStyled = styled.View`
  background-color: ${colors.primary};
  height: 200px;
  border-color:${colors.gray}
  border-width:2px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

 
`;

export const AlertModalTextTitleStyled = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.blue};
  margin-left: 5px;
  margin-top: 20px;
`;

export const AlertModalTextSubtitleStyled = styled(AlertModalTextTitleStyled)`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const AlertModalTextContainerStyled = styled.View`
  margin: 20px;
`;
