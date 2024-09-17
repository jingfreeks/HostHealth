import React from 'react';
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
  const {handleDeleteDept, deleteLoading,navigation} = useStateHooks();
  
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="Htitle">{item?.name}</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1 bcolor="transparent" onPress={() => navigation.navigate('DepartmentForm',item)} border={0}>
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
