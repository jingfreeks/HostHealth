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
      messages = 'Token Expired you must logout and login it again';
    } else {
      messages = 'No suggested jobs matches with your profile';
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
          // eslint-disable-next-line react/jsx-sort-props
          {...testingProps('MyJobsListingTestId')}
          extraData={myjobs?.ids}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          keyExtractor={(item, index) => index.toString()}
          onRefresh={()=>refetch()}
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
