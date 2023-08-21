//@ts-check

import React from 'react';
import {ContainerStyled, FlatlistStyled} from './styles';
import {SuggestedCard} from '@/component/molecules/suggesstedcard';
import {Jobslist} from '@/screens/home/constant';
const MyJobs = () => {
  return (
    <ContainerStyled>
      <FlatlistStyled
        data={Jobslist}
        extraData={Jobslist}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <SuggestedCard data={item} />;
        }}
      />
    </ContainerStyled>
  );
};
export default MyJobs;
