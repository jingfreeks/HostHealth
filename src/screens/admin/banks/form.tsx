import React from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {FormTextController, FormContainer} from '@/component';
import {useBankHooks} from './hooks';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddBanksMutation, useUpdateBanksMutation} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';

const Form = (props: RoutesProps) => {
  const {navigation} = useBankHooks();
  const {route} = props;
  const {name, address, _id} = route?.params || {};
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addBanks, {isLoading: addBanksLoading}] = useAddBanksMutation();
  const [updateBanks, {isLoading: updateBanksLoading}] =
    useUpdateBanksMutation();
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateBanks({
          name: data?.name,
          address: data?.address,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addBanks({
          name: data?.name,
          address: data?.address,
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
      btnTestId="bankFormButtonSubmitTestId"
      formMethod={formMethod}
      loaders={addBanksLoading || updateBanksLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
      <FormHeaderContainerStyled>
        <FormHeaderTextStyled TextMode="Htitlenormal">
          Bank Form Information
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
      <FormTextInputContainerStyled>
        <FormTextController
          Label="Address"
          name="address"
          placeholder="Address"
          rules={{
            required: true,
          }}
        />
      </FormTextInputContainerStyled>
    </FormContainer>
  );
};

export default Form;
