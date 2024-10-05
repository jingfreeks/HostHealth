import React, {useState,useCallback} from 'react';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useGetCityQuery, useDeleteCityMutation,useUploadProfileMutation,useAddCityMutation,useUpdateCityMutation} from '@/slice';
import {useForm,SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Schema} from './schema';
import * as yup from 'yup';
import Config from 'react-native-config';

export const useCityHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const [uri, setUri] = useState<string>('');

  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: '',
      state:'',
      cityImage:'',
      id:'',
    },
    resolver: yupResolver(Schema),
  });

  const {
    data: city,
    refetch: cityRefresh,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCityQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: string;
    isError: boolean;
    error: any;
  }>('getCity');

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
  const [addCity, {isLoading: addStateLoading}] = useAddCityMutation();
  const [updateCity, {isLoading: updateStateLoading}] = useUpdateCityMutation();
  const [deleteCity, {isLoading: deleteLoading}] = useDeleteCityMutation();
  const handleDeleteCity = async (id: string) => {
    try {
      await deleteCity({
        id,
      }).unwrap();
    } catch (error) {
      Alert.alert(error?.data?.message);
    }
  };
  const onRefresh = async () => {
    await cityRefresh();
  };
  const [uploadProfile] = useUploadProfileMutation();

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (data.id) {
        //update
        response = await updateCity({
          name: data?.name,
          stateId: data?.state,
          image:data.cityImage,
          id: data.id,
        }).unwrap();
      } else {
        //insert
        response = await addCity({
          name: data?.name,
          stateId: data?.state,
          image:data.cityImage,
        });
      }
      if (response?.error) {
        alert(response?.error?.data?.message);
      } else {
        navigation.goBack();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleViewImage = useCallback(async () => {
    const result: any = await launchImageLibrary(options);
    if (result?.assets) {
      const response = await uploadProfile(result);
      const {data}: any = (await response) || {};
      formMethod.setValue('cityImage', `${Config.DEV_BASE_URL}${data?.url}`);
      setUri(`${Config.DEV_BASE_URL}/${data?.url}`);
    }
  }, [uri]);

  return {
    navigation,
    city,
    isLoading,
    cityLoading: isLoading,
    isSuccess,
    isError,
    error,
    handleDeleteCity,
    deleteLoading,
    onRefresh,
    uri,
    setUri,
    options,
    uploadProfile,
    addCity,
    updateCity,
    addStateLoading,
    updateStateLoading,
    formMethod,
    onSubmit,
    handleViewImage
  };
};
