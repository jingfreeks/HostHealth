import React from 'react';
import {Avatar} from 'react-native-elements';
import {AvatarStyled, BrowseButtonStyled} from './styles';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {colors} from '@/utils/themes';
import {testingProps} from '@/utils/testframework';
import type {AvatarProps} from './types';

const AvatarScreen = (props: AvatarProps) => {
  const {
    size = 130,
    title = 'LW',
    uri = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    onPress=()=>{},
    testIds,
    isView = true,
  } = props;
  return (
    <AvatarStyled>
      <Avatar
        size={size}
        rounded
        // title={title}
        source={{
          uri: uri
            ? uri
            : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      {isView && (
        <BrowseButtonStyled
          {...testingProps(testIds?.uploadImage)}
          onPress={onPress}>
          <IconIonic color={colors.gray} name={'camera'} size={25} />
        </BrowseButtonStyled>
      )}
    </AvatarStyled>
  );
};
export default AvatarScreen;
