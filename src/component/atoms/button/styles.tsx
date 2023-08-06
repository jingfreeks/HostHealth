import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({bcolor}) => bcolor};
  align-items: center;
  border-color: ${({borderc}) => borderc};
  border-radius: ${({border}) => border}px;
  padding: ${({padding}) => padding}px;
`;

export const ContainerStyled = styled.View`
  border-width: ${({borderw}) => borderw}px;
  border-radius: ${({border}) => border}px;
  border-color: ${({borderc}) => borderc};
`;
