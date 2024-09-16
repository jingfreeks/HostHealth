import React from 'react';
import {View} from 'react-native';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useStateHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
} from './styles';

const ListItem = (props: {item: any}) => {
  const {item} = props;
  const {handleDeleteState, deleteLoading,navigation} = useStateHooks();
  
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="Htitle">{item?.name}</Text>
        <Text>United State Of America</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1 bcolor="transparent" onPress={() => navigation.navigate('StateForm',item)} border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1 bcolor="transparent" onPress={() => handleDeleteState(item._id)} border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
