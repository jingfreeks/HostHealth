// @ts-check
import React from 'react';
import {useState, ReactElement} from 'react';
import {Text} from '@/component/atoms/text';
import {Vcontainer} from '@/component/atoms/vcontainer';
import {Hcontainer} from '@/component/atoms/hcontainer';
import IconIonic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {testingProps} from '@/utils/testframework';
import {colors} from '@/utils/themes';
import type {TextInputProps} from './types';
import {TextInputStyled, LineTextStyled} from './styles';

const TextInput = (props: TextInputProps): ReactElement => {
  const {
    Label,
    onChangeText,
    value,
    type = 'Text',
    isError = false,
    errmessage = '',
    placeholder = '',
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Vcontainer>
      <Text TextMode="Title">{Label}</Text>
      <Hcontainer>
        <TextInputStyled
          {...rest}
          autoCapitalize="none"
          placeholder={placeholder}
          secureTextEntry={type === 'Text' ? isVisible : !isVisible}
          value={value}
          onChangeText={onChangeText}
        />
        {type === 'Text' ? (
          <IconIonic color={colors.gray} name={'close-circle'} size={25} />
        ) : (
          <MaterialIcons
            {...testingProps('MaterialsIconShowPasswordTestId')}
            color={colors.gray}
            name={isVisible ? 'visibility-off' : 'visibility'}
            size={25}
            onPress={() => setIsVisible(!isVisible)}
          />
        )}
      </Hcontainer>
      <LineTextStyled />
      {isError && <Text TextMode="ErrorText">{errmessage}</Text>}
    </Vcontainer>
  );
};
export default TextInput;
