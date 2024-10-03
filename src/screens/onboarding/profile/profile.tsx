import React, {useCallback, useState} from 'react';
import {Avatar, FormTextController} from '@/component/molecules';
import {Prevnextfooter} from '@/component/template';
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled,
} from '../styles';
import {FormProvider} from 'react-hook-form';
import {useUploadProfileMutation} from '@/slice';
import {useOnBoardingHooks} from '../hooks';
import {launchImageLibrary} from 'react-native-image-picker';
import Config from 'react-native-config';

const ProfileScreen = () => {
  const {
    handleProfilenext,
    formProfileMethod,
    handleProfilePrevious,
    profileLoading,
    uri,
    setUri,
  } = useOnBoardingHooks();
  const [uploadProfile, {isLoading}] = useUploadProfileMutation();
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
  const handleViewImage = useCallback(async () => {
    const result: any = await launchImageLibrary(options);
    if (result?.assets) {
      const response = await uploadProfile(result);
      const {data}: any = (await response) || {};
      formProfileMethod.setValue(
        'profileImage',
        `${Config.DEV_BASE_URL}${data?.url}`,
      );
      setUri(`${Config.DEV_BASE_URL}/${data?.url}`);
    }
  }, [uri]);

  return (
    <ContainerStyled>
      <FormProvider {...formProfileMethod}>
        <ProfileAvatarContainerStyled>
          <Avatar
            isView
            testIds={{uploadImage: 'ProfileAvatarUploadImageTestId'}}
            uri={uri}
            size={250}
            onPress={handleViewImage}
          />
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
          testIds={{
            prevOnPress: 'ProfilePreviousButtonTestId',
            nextOnPress: 'ProfileNextButtonTestId',
          }}
          nextOnPress={formProfileMethod.handleSubmit(handleProfilenext)}
          loadernext={profileLoading}
        />
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileScreen;
