import React from 'react';
import {Avatar, FormTextController} from '@/component/molecules';
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled,
  FormContainerStyled,
  ButtonContainerStyled,
} from './styles';
import {FormProvider} from 'react-hook-form';
import {Sbutton} from '@/component/molecules';
import {useProfileDetails} from './hooks';

const ProfileDetailsScreen = () => {
  const {handleProfilesave, formProfileMethod, profileLoading,uri,handleViewImage} =
    useProfileDetails();

  return (
    <ContainerStyled>
      <FormProvider {...formProfileMethod}>
        <FormContainerStyled>
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
        </FormContainerStyled>
        <ButtonContainerStyled>
          <Sbutton
            testId={'ProfileTabDetailsTestId'}
            title={'Update'}
            loaders={profileLoading}
            bcolor={'#d6f3f3'}
            borderw={2}
            border={10}
            onPress={formProfileMethod.handleSubmit(handleProfilesave)}
          />
        </ButtonContainerStyled>
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileDetailsScreen;
