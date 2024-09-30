import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useShiftHooks} from './hooks';
import {message} from '@/config/constant';
import {testingProps} from '@/utils/testframework';

const Shift = () => {
  let content;
  const {navigation, shift, isLoading, isSuccess, error, isError} =
    useShiftHooks();
  console.log('shift', shift);
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List shiftId={item} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100007];
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
      </StateEmptyContainerStyled>
    );
  } else if (isSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={shift.ids}
          extraData={shift.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('ShiftCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('ShiftForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default Shift;
