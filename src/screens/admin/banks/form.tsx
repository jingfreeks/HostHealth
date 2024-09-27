import React from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {FormTextController, Bbutton} from '@/component';
import {useBankHooks} from './hooks';
import {colors} from '@/utils/themes';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {  useAddBanksMutation,
  useUpdateBanksMutation,} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';
import {testingProps} from '@/utils/testframework';

const Form = (props: RoutesProps) => {
  const {navigation} = useBankHooks();
  const {route} = props;
  const {name,address, _id} = route?.params || {};
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addBanks, {isLoading: addBanksLoading}] = useAddBanksMutation();
  const [updateBanks, {isLoading: updateBanksLoading}] = useUpdateBanksMutation();
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateBanks({
          name: data?.name,
          address:data?.address,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addBanks({
          name: data?.name,
          address:data?.address,
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
        <Bbutton
          bcolor={colors.lightergreen}
          border={10}
          loaders={addBanksLoading || updateBanksLoading}
          title="Save"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </FormContainerStyled>
  );
};

export default Form;
