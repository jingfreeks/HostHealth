import React from 'react';
import {View, Text} from 'react-native';
import {ContainerStyled, ProfileTitleContainerStyled} from './styles';
const ProfileScreen = () => {
  return (
    <ContainerStyled>
      <ProfileTitleContainerStyled>
        <Text>Personal Information</Text>
      </ProfileTitleContainerStyled>

      <Text>Avatar</Text>
      <Text>First Name</Text>
      <Text>Last Name</Text>
      <Text>Address</Text>
    </ContainerStyled>
  );
};
export default ProfileScreen;
