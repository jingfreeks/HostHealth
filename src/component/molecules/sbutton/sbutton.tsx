import React from 'react';
import {Text} from '@/component/atoms/text';
import {Button1} from '@/component/atoms';
import {Loaders} from '@/component/atoms/loaders';
import type {BbuttonProps} from './types';
import {ContainerStyled} from './styles';
const Bbutton = (props: BbuttonProps) => {
  const {
    onPress = () => {},
    title,
    border = 10,
    bcolor = 'transparent',
    padding,
    borderw=2,
    borderc,
    loaders = false,
    loaderColor,
    loaderSize = 'small',
    testId,
  } = props;
  return (
    <ContainerStyled border={border} borderc="#99E1E1" borderw={borderw}>
      <Button1
        bcolor={bcolor}
        border={border}
        borderc={borderc}
        borderw={borderw}
        padding={padding}
        testId={testId}
        onPress={onPress}>
        {loaders ? (
          <Loaders color={loaderColor} size={loaderSize} />
        ) : (
          <Text TextMode="Stext">{title}</Text>
        )}
      </Button1>
    </ContainerStyled>
  );
};
export default Bbutton;
