import React, {useMemo, useEffect,useState,useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  useGetOnBoardingProfileQuery,
  useUpdateOnBoardingProfileMutation,
  useUploadProfileMutation
} from '@/slice';
import {useSelector} from 'react-redux';
import {selectCurrentUserId} from '@/slice/auth';
import * as yup from 'yup';
import {ProfileSchema} from './schema';
import {launchImageLibrary} from 'react-native-image-picker';
import Config from 'react-native-config';

export const useProfileDetails = () => {
  type FormProfileData = yup.InferType<typeof ProfileSchema>;
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const usrId = useSelector(selectCurrentUserId);
  const [uri, setUri] = useState<string>('');

  const options: {
    saveToPhotos: boolean;
    mediaType: 'photo' | 'video';
    includeBase64: boolean;
  } = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    // includeExtra,
  };
  
  const [updateOnBoardingProfile, {isLoading: profileLoading}] = useUpdateOnBoardingProfileMutation(
    {fixedCacheKey: 'Profile'},
  );
  const {data: profiles} = useGetOnBoardingProfileQuery<{
    refetch: () => void;
    data: any;
  }>(
    useMemo(() => {
      return {userId: usrId};
    }, [usrId]),
  );

  const [uploadProfile, {isLoading}] = useUploadProfileMutation();

  const formProfileMethod = useForm<FormProfileData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      profileImage: '',
    },
    resolver: yupResolver(ProfileSchema),
  });


  useEffect(() => {
    formProfileMethod.setValue('profileImage', profiles?.picture);
    formProfileMethod.setValue('lastName', profiles?.lastName);
    formProfileMethod.setValue('firstName', profiles?.firstName);
    formProfileMethod.setValue('middleName', profiles?.middlename);
    setUri(profiles?.picture)
  }, [usrId, profiles]);


  const handleProfilesave: SubmitHandler<FormProfileData> = async data => {
    try {
      const userData: any = await updateOnBoardingProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        image: data.profileImage,
        userId: usrId,
      }).unwrap();
      console.log('userData', userData);
      if (userData) {
        navigation.goBack();
      }
      // navigation.navigate('OnBoardingBankInfo')
    } catch (error) {
      console.log('error', error);
      switch (error.status) {
        case 401:
          alert(error.data.message);
          break;
        default:
          alert('error');
      }
    }
  };


  const handleViewImage = useCallback(async () => {
    const result: any = await launchImageLibrary(options);
    if(result.assets){
      const response = await uploadProfile(result);
      const {data}: any = (await response) || {};
      formProfileMethod.setValue(
        'profileImage',
        `${Config.DEV_BASE_URL}${data?.url}`,
      );
      setUri(`${Config.DEV_BASE_URL}/${data?.url}`);
    }

  }, [uri]);
  return {
    navigation,
    handleProfilesave,
    formProfileMethod,
    profileLoading,
    profiles,
    uri, setUri,
    handleViewImage
  };
};
