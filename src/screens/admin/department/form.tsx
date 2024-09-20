import React from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {FormTextController, Bbutton} from '@/component';
import {useDepartmentHooks} from './hooks';
import {colors} from '@/utils/themes';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddDeptMutation, useUpdateDeptMutation} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';

const Form = (props: RoutesProps) => {
  const {navigation} = useDepartmentHooks();
  const {route} = props;
  const {name, _id} = route?.params || {};
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addDept, {isLoading: addDeptLoading}] = useAddDeptMutation();
  const [updateDept, {isLoading: updateStateLoading}] = useUpdateDeptMutation();
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateDept({
          name: data?.name,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addDept({
          name: data?.name,
        });
      }
      if (response?.error) {
        alert(response?.error?.data?.message);
      } else {
        navigation.goBack();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <FormContainerStyled>
      <FormProvider {...formMethod}>
        <FormHeaderContainerStyled>
          <FormHeaderTextStyled TextMode="Htitlenormal">
            Department Form Information
          </FormHeaderTextStyled>
        </FormHeaderContainerStyled>
        <FormTextInputContainerStyled>
          <FormTextController
            Label="Name"
            name="name"
            placeholder="Name"
            rules={{
              required: true,
            }}
          />
        </FormTextInputContainerStyled>
        <Bbutton
          bcolor={colors.lightergreen}
          border={10}
          loaders={addDeptLoading || updateStateLoading}
          title="Save"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </FormContainerStyled>
  );
};

export default Form;
