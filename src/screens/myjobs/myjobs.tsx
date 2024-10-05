/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-check

import React from 'react';
import {ContainerStyled, FlatlistStyled,MyJobsEmptyContainerStyled} from './styles';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {testingProps} from '@/utils/testframework'
import {SuggestedEmptyIcon} from '@/assets';
import {useSelector} from 'react-redux';
import type {State} from '@/config/types';
import {useGetMyJobsQuery} from '@/slice/myjobs';
import {message} from '@/config/constant';
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

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100023];
    }
    return (
      <MyJobsEmptyContainerStyled>
        <HomeEmptyCard imgsource={SuggestedEmptyIcon} message={messages} />
      </MyJobsEmptyContainerStyled>
    );
  }
  if (isSuccess) {
    return (
      <ContainerStyled>
        <FlatlistStyled
          data={myjobs?.ids}
          refreshing={isLoading}
          {...testingProps('MyJobsListingTestId')}
          extraData={myjobs?.ids}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={()=>refetch()}
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
