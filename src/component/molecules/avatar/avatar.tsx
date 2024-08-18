import React from 'react';
import {Avatar} from 'react-native-elements';
import {AvatarStyled} from './styles';
import type {AvatarProps} from './types'
const AvatarScreen = (props:AvatarProps) => {
  const {size=130,title='LW',uri='https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}=props;
  return (
    <AvatarStyled>
      <Avatar
        size={size}
        rounded
        title={title}
        source={{
          uri: uri,
        }}
      />
    </AvatarStyled>
  );
};
export default AvatarScreen;
