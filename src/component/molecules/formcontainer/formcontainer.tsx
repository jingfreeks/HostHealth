import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {Bbutton} from '@/component';
import {colors} from '@/utils/themes';
import {FormContainerStyled, ButtonContainerStyled} from './styles';

const FormContainer = (props: {
  children?: ReactNode;
  formMethod: any;
  loaders: boolean;
  onPress: () => void;
  btnTestId?:string;
}) => {
  const {children, formMethod, loaders, onPress,btnTestId} = props;
  return (
    <FormContainerStyled>
      <FormProvider {...formMethod}>
        <ScrollView style={{flex: 1}}>{children}</ScrollView>
      </FormProvider>
      <ButtonContainerStyled>
        <Bbutton
          testId={btnTestId}
          bcolor={colors.lightergreen}
          border={10}
          loaders={loaders}
          title="Save"
          onPress={onPress}
        />
      </ButtonContainerStyled>
    </FormContainerStyled>
  );
};
export default FormContainer;
