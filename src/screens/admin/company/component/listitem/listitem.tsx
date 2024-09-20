import React from 'react';
import {View} from 'react-native';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useCompanyHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
  ImageContainerStyled,
  ImageStyled,
} from './styles';

const ListItem = (props: {item: any}) => {
  const {item} = props;
  const {handleDeleteCompany, deleteLoading, navigation} = useCompanyHooks();
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text numberOfLines={1} TextMode="Htitle">{item?.name}</Text>
        <Text numberOfLines={1} TextMode="Text">{item?.address}</Text>
        <Text numberOfLines={1} TextMode="Htitle">{item?.state}</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1
          bcolor="transparent"
          onPress={() => navigation.navigate('CompanyForm', {...item,cityId:item.city})}
          border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1
          bcolor="transparent"
          onPress={() => handleDeleteCompany(item._id)}
          border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
