import React from 'react';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useBankHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
} from './styles';
import type {bankListItem} from './types';
import {testingProps} from '@/utils/testframework';

const ListItem = (props: {item: bankListItem}) => {
  const {item} = props;
  const {handleDeleteBanks, deleteLoading, navigation} = useBankHooks();
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="TextNormalBold">{item?.name}</Text>
        <Text TextMode="Text">{item?.address}</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1
          testId={'BankEditFormTestId'}
          bcolor="transparent"
          onPress={() => navigation.navigate('BankForm', item)}
          border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1
          testId={'BankDeleteItemTestId'}
          bcolor="transparent"
          onPress={() => handleDeleteBanks(item._id)}
          border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
