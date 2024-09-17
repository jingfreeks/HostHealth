import React from 'react';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useShiftHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
} from './styles';

const ListItem = (props: {item: any}) => {
  const {item} = props;
  const {handleDeleteDept, deleteLoading,navigation} = useShiftHooks();
  
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="Htitle">{item?.title}</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1 bcolor="transparent" onPress={() => navigation.navigate('ShiftForm',item)} border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1 bcolor="transparent" onPress={() => handleDeleteDept(item._id)} border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
