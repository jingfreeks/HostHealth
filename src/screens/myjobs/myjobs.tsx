import React from 'react';
import {ContainerStyled, FlatlistStyled} from './styles';
import {SuggestedCard} from '@component/molecules/suggesstedcard';
import {Jobslist} from '@screens/home/constant';
const MyJobs = () => {
  return (
    <ContainerStyled>
      <FlatlistStyled
        data={Jobslist}
        renderItem={({item}) => {
          return <SuggestedCard data={item} />;
        }}
        keyExtractor={item => item.id}
        extraData={Jobslist}
      />
    </ContainerStyled>
  );
};
export default MyJobs;
