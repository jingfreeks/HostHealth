import React, {useEffect} from 'react';
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {Jobslist, PopularListData} from '@/screens/home/constant';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPCities} from '@/slice/pcities';
import {fetchSuggested} from '@/slice/suggested';
import {ThunkDispatch} from '@reduxjs/toolkit';
import type {State} from '@/config/types';
import {
  ScrollViewContainer,
  ListsContainerStyled,
  SuggestedTextContainerStyled,
} from './styles';
const HomeScreen = () => {
  const pcities = useSelector((state: State) => state.pcities.data);
  const loading = useSelector((state: State) => state.pcities.loading);
  const suggestedJobs = useSelector((state: State) => state.suggetedjob.data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchPCities());
    dispatch(fetchSuggested());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollViewContainer>
      <HomeHeaderList />

      <ListsContainerStyled>
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">SUGGESTED</Text>
        </SuggestedTextContainerStyled>
        <SuggestedList data={Jobslist} />
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">POPULAR CITIES</Text>
          <PopularList data={PopularListData} />
        </SuggestedTextContainerStyled>
      </ListsContainerStyled>
    </ScrollViewContainer>
  );
};

export default HomeScreen;
