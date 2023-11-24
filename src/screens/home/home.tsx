import React from 'react';
import {useEffect} from 'react';
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {Jobslist} from '@/screens/home/constant';
import {useDispatch} from 'react-redux';
import {fetchSuggested} from '@/slice/suggested';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {
  ScrollViewContainer,
  ListsContainerStyled,
  SuggestedTextContainerStyled,
} from './styles';
const HomeScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();


  useEffect(() => {
    // dispatch(fetchPCities());
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
          <PopularList />
        </SuggestedTextContainerStyled>
      </ListsContainerStyled>
    </ScrollViewContainer>
  );
};

export default HomeScreen;
