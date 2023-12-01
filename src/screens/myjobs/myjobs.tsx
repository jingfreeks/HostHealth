/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-check

import React from 'react';
import {ContainerStyled, FlatlistStyled} from './styles';
import {SuggestedCard} from '@/component/molecules/suggesstedcard';
import {useSelector} from 'react-redux';
import {Jobslist} from '@/screens/home/constant';
import type {State} from '@/config/types';
import {useGetMyJobsQuery} from '@/slice/myjobs';
import RenderList from './renderlist';
const MyJobs = () => {
  const userId = useSelector((state: State) => state.auth.userId);
  const {
    refetch,
    data: myjobs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMyJobsQuery<any>({userId});
  console.log('Errors',error)
  if (isSuccess) {
    return (
      <ContainerStyled>
        <FlatlistStyled
          data={myjobs?.ids}
          refreshing={isLoading}
          // eslint-disable-next-line react/jsx-sort-props
          extraData={myjobs?.ids}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          keyExtractor={(item,index) => index.toString()}
          onRefresh={refetch}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderItem={({item}: {item: any}) => {
            return <RenderList jobId={item} userId={userId} />;
          }}
        />
      </ContainerStyled>
    );
  }
  return null;
};
export default MyJobs;
