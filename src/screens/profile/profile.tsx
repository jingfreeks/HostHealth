import React, {useCallback, useState} from 'react';
// import {Avatar} from 'react-native-elements';
import {Avatar} from '@/component/molecules';
import {Text} from '@/component/atoms/text';
import {useGetProfileQuery} from '@/slice/profile';
import {setLogout, selectCurrentUserId} from '@/slice/auth';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {apiSlice} from '@/config/apiSlice';
import {
  ContainerStyled,
  NameInfoStyled,
  HeaderStyled,
  ContentStyled,
  ScrollViewContainer,
  ListButtonStyled,
  FooterStyled,
} from './styles';
import {testingProps} from '@/utils/testframework';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const usrId = useSelector(selectCurrentUserId);
  const options:any = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    // includeExtra,
  };
  const {data: profiles} = useGetProfileQuery<{
    refetch: () => void;
    data: any;
  }>({userId: usrId});

  const handleLogout = async () => {
    try {
      await dispatch(setLogout());
      await dispatch(apiSlice.util.resetApiState());
    } catch (error) {
      switch (error.status) {
        case 401:
          alert(error.data.message);
          break;
        default:
          alert('error');
      }
    }
  };
  const handleViewImage = useCallback(async() => {
      await launchImageLibrary(options)
  }, []);
  return (
    <ContainerStyled>
      <ScrollViewContainer>
        <ContainerStyled>
          <HeaderStyled>
            <Avatar onPress={handleViewImage} />
            <NameInfoStyled>
              <Text>{`${profiles?.firstName}`}</Text>
              <Text>{`${profiles?.lastName}`}</Text>
              <Text>{`${profiles?.middlename}`}</Text>
              <Text>Position</Text>
            </NameInfoStyled>
          </HeaderStyled>
          <ContentStyled>
            <ListButtonStyled>
              <Text TextMode="Title">Details</Text>
            </ListButtonStyled>
            <ListButtonStyled>
              <Text TextMode="Title">Bank info</Text>
            </ListButtonStyled>
            <ListButtonStyled>
              <Text TextMode="Title">Settings</Text>
            </ListButtonStyled>
          </ContentStyled>
        </ContainerStyled>
      </ScrollViewContainer>
      <FooterStyled>
        <ListButtonStyled
          {...testingProps('ProfileLogoutButton')}
          onPress={() => handleLogout()}>
          <Text TextMode="Title">Log-out</Text>
        </ListButtonStyled>
      </FooterStyled>
    </ContainerStyled>
  );
};
export default ProfileScreen;
