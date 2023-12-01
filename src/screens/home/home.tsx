import React from 'react';
import {useEffect} from 'react';
import {RefreshControl} from 'react-native'
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {useGetJobsQuery} from '@/slice/suggested';
import {Jobslist} from '@/screens/home/constant';
import {useDispatch} from 'react-redux';
// import {fetchSuggested} from '@/slice/suggested';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {
  ScrollViewContainer,
  ListsContainerStyled,
  SuggestedTextContainerStyled,
} from './styles';
const HomeScreen = () => {
  const {
    isFetching:refetchjob,
    refetch:suggestedrefresh,
    data: jobs,
    isSuccess,
    isError,
    error,
  } = useGetJobsQuery<any>('getJobs');

  console.log('errors',error)
  const onRefresh=()=>{
    suggestedrefresh()
  }
  return (
    <ScrollViewContainer refreshControl={
      <RefreshControl refreshing={refetchjob} onRefresh={onRefresh} />
    }>
      <HomeHeaderList />

      <ListsContainerStyled>
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">SUGGESTED</Text>
        </SuggestedTextContainerStyled>
        <SuggestedList />
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">POPULAR CITIES</Text>
          <PopularList />
        </SuggestedTextContainerStyled>
      </ListsContainerStyled>
    </ScrollViewContainer>
  );
};

export default HomeScreen;
