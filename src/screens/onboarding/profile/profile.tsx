import React from 'react';
import {Avatar, FormTextController} from '@/component/molecules';
import {Prevnextfooter} from '@/component/template';
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled,
} from '../styles';
import {FormProvider} from 'react-hook-form';
import {useOnBoardingHooks} from '../hooks';

const ProfileScreen = () => {
  const {handleProfilenext, formProfileMethod,handleProfilePrevious,profileLoading} = useOnBoardingHooks();

  return (
    <ContainerStyled>
      <FormProvider {...formProfileMethod}>
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
          nextOnPress={formProfileMethod.handleSubmit(handleProfilenext)}
          loadernext={profileLoading}
        />
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileScreen;
