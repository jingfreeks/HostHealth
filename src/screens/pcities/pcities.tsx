import React from 'react';
import {ContainerStyled} from './styles';
import {ScrollViewContainer} from '@/screens/home/styles';
import {PopularList} from '@/component/template/popularlist';
import {PopularListData} from '@/screens/home/constant';
const PopularCitiesScreen = () => {
  return (
    <ScrollViewContainer>
      <ContainerStyled>
        <PopularList />
      </ContainerStyled>
    </ScrollViewContainer>
  );
};
export default PopularCitiesScreen;
