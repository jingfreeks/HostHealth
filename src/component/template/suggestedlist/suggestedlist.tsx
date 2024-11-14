/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback, useMemo} from 'react';
import {ListRenderItem, ListRenderItemInfo, FlatList} from 'react-native';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {SuggestedEmptyIcon} from '@/assets';
import type {JobIdList} from './types';
import List from './list';
import {useGetJobsQuery} from '@/slice/suggested';
import {selectCurrentUserId} from '@/slice/auth';
import {useSelector} from 'react-redux';
import {
  SuggestedListContainerStyled,
  SuggestedListEmptyContainerStyled,
} from './styles';
const SuggestedList = () => {
  const usrId = useSelector(selectCurrentUserId)?.toString();
  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetJobsQuery<any>(
    useMemo(() => {
      return {usrId};
    }, [usrId]),
  );
  const renderItem: ListRenderItem<JobIdList> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {

      return <List jobId={item} usrId={usrId} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = 'Token Expired you must logout and login it again';
    } else {
      messages = 'No suggested jobs matches with your profile';
    }
    return (
      <SuggestedListEmptyContainerStyled>
        <HomeEmptyCard imgsource={SuggestedEmptyIcon} message={messages} />
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
