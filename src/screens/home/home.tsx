/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useEffect} from 'react';
import {RefreshControl} from 'react-native'
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {useGetJobsQuery} from '@/slice/suggested';
import {useGetCityQuery} from '@/slice/city';
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
    refetch:suggestedrefresh,
  } = useGetJobsQuery<any>('getJobs');
  const {
    refetch:pcitiesFetch,
    isLoading,
    isSuccess,
  } = useGetCityQuery<any>('getcity');
  const onRefresh=async()=>{
    await suggestedrefresh()
    await pcitiesFetch()
  }
  return (
    <ScrollViewContainer refreshControl={
      <RefreshControl refreshing={false} onRefresh={onRefresh} />
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
