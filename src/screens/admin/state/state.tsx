import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import { FAB } from 'react-native-elements';
import {ListItemContainerStyled,ContainerStyled} from './styles';
import {ListItem} from './component';
import {states} from './constant';
import {useStateHooks} from './hooks'

const State = () => {
  const {navigation}=useStateHooks()
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return (
        <ListItemContainerStyled>
          <ListItem item={item} />
        </ListItemContainerStyled>
      );
    },
    [],
  );
  return (
    <ContainerStyled>
      <FlatList
        data={states}
        extraData={states}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index.toString()}
      />
      <FAB title="Create"   placement="right" size="large" onPress={()=>navigation.navigate('StateForm')}/>
    </ContainerStyled>
  );
};

export default State;
