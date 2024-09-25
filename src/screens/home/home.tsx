/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useMemo,useEffect} from 'react';
import {testingProps} from '@/utils/testframework'
import {RefreshControl} from 'react-native'
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {useSelector,useDispatch} from 'react-redux';
import {useGetJobsQuery} from '@/slice/suggested';
import {useGetCityQuery} from '@/slice/city';
import {useGetProfileQuery} from '@/slice/profile';
import {selectCurrentUserId,selectUserRoles} from '@/slice/auth';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
//import {fetchSuggested} from '@/slice/suggested';
import {setLogout} from '@/slice/auth'
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
  const usrId = useSelector(selectCurrentUserId);
  const usrRoles =useSelector(selectUserRoles)
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const {data: profiles,isLoading:profileLoading,isError,error,refetch:profileRefetch} = useGetProfileQuery<{
    refetch: () => void;
    data: any;
    isLoading:boolean;
    isError:boolean;
    error:any;
  }>(useMemo(()=>({userId: usrId}),[usrId,navigation]));
  // useEffect(()=>{
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // The screen is focused
  //     // Call any action
  //     profileRefetch()
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // },[navigation,usrId])
  // useEffect(()=>{
  //   if(!profileLoading && isError && error?.status===400 && !usrRoles.find((item:string)=>item==='Admin')){
  //     navigation.navigate('OnBoardingProfile')
  //   }else if(!profileLoading && isError && error?.status===403){
  //      dispatch(setLogout());
  //   }
  // },[profiles,navigation,error,isError,profileLoading])

  const onRefresh=async()=>{
    await suggestedrefresh()
    await pcitiesFetch()
  }

  return (
    <ScrollViewContainer {...testingProps('HomeScreenOnRefreshTestId')} refreshControl={
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
