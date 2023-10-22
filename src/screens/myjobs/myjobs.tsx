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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        keyExtractor={(item: any) => item.id}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderItem={({item}: {item: any}) => {
          return <SuggestedCard data={item} />;
        }}
      />
    </ContainerStyled>
  );
};
export default MyJobs;
