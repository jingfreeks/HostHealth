import styled from 'styled-components/native';
import {colors} from '@/utils/themes';
import {Text} from '@/component/atoms/text';
import {verticalScale} from 'react-native-size-matters';


export const DetailsContainerStyled = styled.View`
  margin-bottom: 15px;
  margin-left: 20px;
  flex: 1;
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
