import styled from 'styled-components/native';

export const Container = styled.View<{alignType: string}>`
  flex-direction: column;
  align-items: ${({alignType}) => alignType};
  align-self: ${({alignType}) => alignType};
`;

export const SafeAreaViewStyled = styled.SafeAreaView``;
