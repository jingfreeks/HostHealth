/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback} from 'react';
import {ListRenderItem, ListRenderItemInfo, FlatList} from 'react-native';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import SuggestedCard from '@/component/molecules/suggesstedcard/suggestedcard';
import {SuggestedEmptyIcon} from '@/assets';
import type {SuggestedListProps, SuggestedCardDetailsProps,JobIdList} from './types';
import List from './list'
import {useGetJobsQuery} from '@/slice/suggested';
import {
  SuggestedListContainerStyled,
  FlatlistStyled,
  RenderItemStyled,
  SuggestedListEmptyContainerStyled,
} from './styles';
const SuggestedList = () => {
  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetJobsQuery<any>('getJobs');

  const renderItem: ListRenderItem<JobIdList> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return (
          <List jobId={item}/>
      );
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if(error?.status===403){
      messages='Token Expired you must logout and login it again'
    }else{
      messages='No suggested jobs matches with your profile'
    }
    return (
      <SuggestedListEmptyContainerStyled>
        <HomeEmptyCard
          imgsource={SuggestedEmptyIcon}
          message={messages}
        />
      </SuggestedListEmptyContainerStyled>
    );
  } else if (isSuccess) {
    return (
      <SuggestedListContainerStyled>
        <FlatList
          horizontal
          data={jobs.ids}
          extraData={jobs.ids}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </SuggestedListContainerStyled>
    );
  }
};
export default SuggestedList;
