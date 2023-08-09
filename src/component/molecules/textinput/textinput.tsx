import React, {useState} from 'react';
import {Text} from '@/component/atoms/text';
import {Vcontainer} from '@/component/atoms/vcontainer';
import {Hcontainer} from '@/component/atoms/hcontainer';
import IconIonic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/utils/themes';
import {TextInputStyled, LineTextStyled} from './styles';
const TextInput = props => {
  const {Label, onChangeText, value, type = 'Text'} = props;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Vcontainer>
      <Text TextMode="Title">{Label}</Text>
      <Hcontainer>
        <TextInputStyled
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isVisible}
        />
        {type === 'Text' ? (
          <IconIonic name={'close-circle'} size={25} color={colors.gray} />
        ) : (
          <MaterialIcons
            name={isVisible ? 'visibility-off' : 'visibility'}
            onPress={() => setIsVisible(!isVisible)}
            size={25}
            color={colors.gray}
          />
        )}
      </Hcontainer>
      <LineTextStyled />
    </Vcontainer>
  );
};
export default TextInput;
