import React, {useCallback} from 'react';
import {Alert} from 'react-native'
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
import {useLogoutMutation} from '@/slice/authApi'
import {testingProps} from '@/utils/testframework';
import {launchImageLibrary} from 'react-native-image-picker';
import {useProfileHooks} from './hooks'


const ProfileScreen = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const usrId = useSelector(selectCurrentUserId);
  const {navigation}=useProfileHooks()
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
  const [logout, {isLoading}] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logout({}).unwrap()
      await dispatch(setLogout());
      await dispatch(apiSlice.util.resetApiState());
    } catch (error) {
      switch (error.status) {
        case 401:
          Alert.alert(error.data.message);
          break;
        default:
          Alert.alert('error');
      }
    }
  };

  return (
    <ContainerStyled>
      <ScrollViewContainer>
        <ContainerStyled>
          <HeaderStyled>
            <Avatar isView={false} uri={profiles?.picture} testIds={{uploadImage:''}} onPress={()=>{}}/>
            <NameInfoStyled>
              <Text TextMode='Title'>{`${profiles?.firstName} ${profiles?.lastName} ${profiles?.middlename}`}</Text>
              <Text TextMode='Title'>Employee</Text>
            </NameInfoStyled>
          </HeaderStyled>
          <ContentStyled>
            <ListButtonStyled onPress={()=>navigation.navigate('ProfileDetails')}>
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
