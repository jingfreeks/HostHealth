import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useSkillsHooks} from './hooks';
import {message} from '@/config/constant';
import {testingProps} from '@/utils/testframework';

const Skills = () => {
  let content;
  const {navigation, skills, isLoading, isSuccess, error, isError} =
  useSkillsHooks();
    
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List skillId={item} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100029];
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
        {error?.status !== 403 && (
          <FAB
            {...testingProps('BanksCreateButtonTestId')}
            title="Create"
            placement="right"
            size="large"
            onPress={() => navigation.navigate('SkillsForm')}
          />
        )}
      </StateEmptyContainerStyled>
    );
  } else if (isSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={skills.ids}
          extraData={skills.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('BanksCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('SkillsForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default Skills;
