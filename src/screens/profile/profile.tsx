
import {Avatar} from 'react-native-elements';
import {Text} from '@/component/atoms/text';
import {useGetProfileQuery} from '@/slice/profile';
import {setLogout,selectCurrentUserId} from '@/slice/auth';
import {useDispatch,useSelector} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {
  ContainerStyled,
  NameInfoStyled,
  AvatarStyled,
  HeaderStyled,
  ContentStyled,
  ScrollViewContainer,
  ListButtonStyled,
  FooterStyled,
} from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const usrId=useSelector(selectCurrentUserId)
  const {
    data: profiles,
  } = useGetProfileQuery<{
    refetch: () => void;
    data: any;
  }>({userId: usrId});
  
  const handleLogout = async () => {
    try {
      await dispatch(setLogout());
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
  return (
    <ContainerStyled>
      <ScrollViewContainer>
        <ContainerStyled>
          <HeaderStyled>
            <AvatarStyled>
              <Avatar
                size={130}
                rounded
                title="LW"
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
            </AvatarStyled>

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
        <ListButtonStyled onPress={() => handleLogout()}>
          <Text TextMode="Title">Log-out</Text>
        </ListButtonStyled>
      </FooterStyled>
    </ContainerStyled>
  );
};
export default ProfileScreen;
