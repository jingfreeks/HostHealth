import React from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {FormTextController, Bbutton,FormContainer} from '@/component';
import {useShiftHooks} from './hooks';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddShiftMutation, useUpdateShiftMutation} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';

const Form = (props: RoutesProps) => {
  const {navigation} = useShiftHooks();
  const {route} = props;
  const {title:name, _id} = route?.params || {};
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addShift, {isLoading: addShiftLoading}] = useAddShiftMutation();
  const [updateShift, {isLoading: updateShiftLoading}] = useUpdateShiftMutation();
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateShift({
          title: data?.name,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addShift({
          title: data?.name,
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
    <FormContainer
      formMethod={formMethod}
      loaders={addShiftLoading || updateShiftLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
        <FormHeaderContainerStyled>
          <FormHeaderTextStyled TextMode="Htitlenormal">
            Shift Form Information
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
        </FormContainer>
  );
};

export default Form;
