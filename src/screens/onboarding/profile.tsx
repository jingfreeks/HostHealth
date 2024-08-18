import React from 'react';
import {Avatar, FormTextController} from '@/component/molecules';
import {Prevnextfooter} from '@/component/template';
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled,
} from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector} from 'react-redux';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {useUpdateProfileMutation} from '@/slice/profile';
import {selectCurrentUserId} from '@/slice/auth';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';

import * as yup from 'yup';
import {Schema} from './schema';
const ProfileScreen = () => {
  type FormData = yup.InferType<typeof Schema>;
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const formMethod = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
    },
    resolver: yupResolver(Schema),
  });
  const usrId=useSelector(selectCurrentUserId)
  const [updateProfile, {isLoading}] = useUpdateProfileMutation({fixedCacheKey: "Profile"});
  const handleOnPrevious = () => {};
  const handleOnNext: SubmitHandler<FormData> = async (data) => {
    try {
      const userData: any = await updateProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        middleName: data.middleName,
        userId:usrId
      }).unwrap();
      if(userData){
        console.log('userData',userData)
        navigation.goBack()
      }
    } catch (error) {
      console.log('error',error)
      switch (error.status) {
        case 401:
          alert(error.data.message);
          break;
        default:
          alert('error');
      }
    }
  };
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ProfileAvatarContainerStyled>
          <Avatar />
        </ProfileAvatarContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="First Name"
            name="firstName"
            placeholder="First Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Last Name"
            name="lastName"
            placeholder="Last Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Middle Name"
            name="middleName"
            placeholder="Address"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <Prevnextfooter
          nextOnPress={formMethod.handleSubmit(handleOnNext)}
          prevOnPress={handleOnPrevious}
          loadernext={isLoading}
        />
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileScreen;
