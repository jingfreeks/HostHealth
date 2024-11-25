import React from 'react';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSkillsHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
} from './styles';
import type {skillsListItem} from './types';
import {testingProps} from '@/utils/testframework';

const ListItem = (props: {item: skillsListItem}) => {
  const {item} = props;
  const {handleDeleteSkills, navigation} = useSkillsHooks();
  return (
    <ContainerStyled>
      <InfoContainerStyled>
        <Text TextMode="TextNormalBold">{item?.name}</Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1
          testId={'SkillsEditFormTestId'}
          bcolor="transparent"
          onPress={() => navigation.navigate('SkillsForm', item)}
          border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1
          testId={'SkillsDeleteItemTestId'}
          bcolor="transparent"
          onPress={() => handleDeleteSkills(item._id)}
          border={0}>
          <FontAwesome name={'trash-o'} size={25} />
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
