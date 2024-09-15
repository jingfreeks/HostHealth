import React from 'react';
import {SeparatorStyled, FooterContainerStyled} from './styles';
import {Sbutton} from '@/component/molecules';
import type {PrevNextTypes} from './types';
const PrevNextFooter = (props: PrevNextTypes) => {
  const {isPrevView=false,loadernext=false, nextOnPress=()=>{}, prevOnPress=()=>{}} = props;
  return (
    <FooterContainerStyled>
      {isPrevView && (
        <Sbutton
          title={'Previous'}
          bcolor={'#d6f3f3'}
          borderw={2}
          border={10}
          onPress={prevOnPress}
        />
      )}
      <SeparatorStyled />
      <Sbutton
        title={'Next'}
        loaders={loadernext}
        bcolor={'#d6f3f3'}
        borderw={2}
        border={10}
        onPress={nextOnPress}
      />
    </FooterContainerStyled>
  );
};
export default PrevNextFooter;
