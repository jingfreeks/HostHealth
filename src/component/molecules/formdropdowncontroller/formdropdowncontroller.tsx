import React from 'react';
import {TextInput} from '@/component/molecules/textinput';
import {Controller, useFormContext} from 'react-hook-form';
import type {FormTextControllerTypes, IField2} from './types';
import {Dropdown} from '../dropdown';

const FormTextController = (props: FormTextControllerTypes) => {
  const {
    name = '',
    rules,
    onBlur = () => {},
    loading,
    data,
    ...rest
  } = props;

  const {control, formState} = useFormContext() ?? {};
  return (
    <Controller
      control={control}
      name={name}
      render={({field}) => (
        <Dropdown
          name={name}
          value={field.value}
          isError={formState.errors[name]?.type ? true : false}
          errmessage={formState.errors[name]?.message?.toString()}
          loading={loading}
          data={data}
          onChange={({value}: {value:string}) => {
            field.onChange(value);
          } }
          {...rest}        />
      )}
      rules={rules}
    />
  );
};
export default FormTextController;
