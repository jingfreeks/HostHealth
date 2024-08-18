import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{
  bcolor: string;
  border: number;
  padding: number;
  onPress: () => void;
}>`
  background-color: ${({bcolor}) => bcolor};
  align-items: center;
  border-radius: ${({border}) => border}px;
  padding: ${({padding}) => padding}px;
`;

export const ContainerStyled = styled.View<{
  border: number;
  borderc: string;
  borderw: number;
}>`
  border-width: ${({borderw}) => borderw}px;
  border-radius: ${({border}) => border}px;
  border-color: ${({borderc}) => borderc};
`;

