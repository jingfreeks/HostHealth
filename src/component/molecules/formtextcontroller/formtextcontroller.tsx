import React from 'react';
import {TextInput} from '@/component/molecules/textinput';
import {Controller, useFormContext} from 'react-hook-form';
import type {FormTextControllerTypes} from './types';
const FormTextController = (props: FormTextControllerTypes) => {
  const {name = '', rules, onBlur = () => {}, ...rest} = props;

  const {control, formState} = useFormContext() ?? {};

  return (
    <Controller
      control={control}
      name={name}
      render={({field}) => (
        <TextInput
          {...rest}
          errmessage={formState.errors[name]?.message?.toString()}
          isError={formState.errors[name]?.type === 'required' ? true : false}
          value={field.value}
          onBlur={(event: any) => {
            field.onBlur();
            onBlur?.(event);
          }}
          onChangeText={(value: string) => {
            field.onChange(value);
          }}
        />
      )}
      rules={rules}
    />
  );
};
export default FormTextController;
