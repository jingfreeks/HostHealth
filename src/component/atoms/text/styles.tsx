import styled from 'styled-components/native';
import {verticalScale,scale} from 'react-native-size-matters';
import {colors} from '@/utils/themes';

const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-family: Avenir;
  color: ${colors.blue};
`;

const TextNormal = styled(Text)`
  color: ${colors.black};
`;
const TextNormalBold = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.black};
`;
const TextNormalRegular = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.black};
`;
const Stext = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.medlightgreen};
`;

const Title = styled(Text)`
  font-size: ${verticalScale(18)}px;
  font-weight: 900;
`;

const Ptitle = styled(Text)`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.medlightgreen};
`;

const Pstitle = styled(Text)`
  font-size: 12px;
  font-weight: 500;
`;
const Htitle = styled(Title)`
  font-size: ${verticalScale(20)}px;
`;

const Htitlenormal = styled(Title)`
  font-weight: 500;
`;
const Stitle = styled(Text)`
  font-size: 12px;
`;

const MtextBold = styled(Text)`
  font-size: 14px;
  font-weight: 900;
`;

const ErrorText = styled(Text)`
  font-size: 14px;
  font-weight: 900;
  color: red;
`;
export default {
  Text,
  Title,
  Stext,
  TextNormal,
  Htitle,
  Stitle,
  Htitlenormal,
  Ptitle,
  Pstitle,
  TextNormalBold,
  TextNormalRegular,
  MtextBold,
  ErrorText,
};
