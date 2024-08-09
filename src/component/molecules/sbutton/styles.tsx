import styled from 'styled-components/native';

// export const ContainerStyled = styled.View`
//   padding: 5px;
//   margin-left: 5px;
//   margin-right: 5px;  
// `;
export const ContainerStyled = styled.View<{
  border: number;
  borderc: string;
  borderw: number;
}>`
  border-width: ${({borderw}) => borderw}px;
  border-radius: ${({border}) => border}px;
  border-color: ${({borderc}) => borderc};
  flex:1; 
`;