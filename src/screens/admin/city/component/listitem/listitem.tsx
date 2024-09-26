import React from 'react';
import {View} from 'react-native';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useCityHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
  ImageContainerStyled,
  ImageStyled,
} from './styles';

const ListItem = (props: {item: any}) => {
  const {item} = props;
  const {handleDeleteCity, deleteLoading, navigation} = useCityHooks();
  return (
    <ContainerStyled>
      <ImageContainerStyled>
        <ImageStyled
          resizeMode={'stretch'}
          source={{
            uri: item?.image,
          }}
        />
      </ImageContainerStyled>
      <InfoContainerStyled>
        <Text numberOfLines={1} TextMode="Htitle">
          {item?.name}
        </Text>
        <Text numberOfLines={1} TextMode="Htitle">
          {item?.statename}
        </Text>
        <Text>United State Of America</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1
          testId={'CityEditFormTestId'}
          bcolor="transparent"
          onPress={() => navigation.navigate('Cityform', item)}
          border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1
          testId={'CityDeleteFormTestId'}
          bcolor="transparent"
          onPress={() => handleDeleteCity(item._id)}
          border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
