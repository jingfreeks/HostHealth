import React, {useMemo} from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
  StateContainerStyled,
} from './styles';
import {FormTextController, Text, FormContainer} from '@/component';
import {useCompanyHooks} from './hooks';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddCompanyMutation, useUpdateCompanyMutation} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';
import {Formdropdowncontroller} from '@/component';
import {useCityHooks} from '@/screens/admin/city/hooks';

const Form = (props: RoutesProps) => {
  const {navigation} = useCompanyHooks();
  const {city, cityLoading} = useCityHooks();
  const {route} = props;
  const {name, address, cityId, _id} = route?.params || {};

  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
      address: address || '',
      cityId: cityId || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addCompany, {isLoading: addCompanyLoading}] = useAddCompanyMutation();
  const [updateCompany, {isLoading: updateCompanyLoading}] =
    useUpdateCompanyMutation();

  const citysdata = useMemo(() => {
    let citysdata = city;
    return city?.ids?.map((item: string) => {
      return {
        label: citysdata?.entities[item]?.name,
        value: citysdata?.entities[item]?._id,
      };
    });
  }, [city]);

  const getStateInfo = useMemo(() => {
    return city?.entities[formMethod.watch('cityId')]?.statename;
  }, [formMethod.watch('cityId'), city]);

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateCompany({
          name: data?.name,
          address: data?.address,
          cityId: data?.cityId,
          image:
            'https://img.freepik.com/premium-photo/city-skyline-with-city-background_1249034-36162.jpg?w=826',
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addCompany({
          name: data?.name,
          cityId: data?.cityId,
          address: data?.address,
          image:
            'https://img.freepik.com/premium-photo/city-skyline-with-city-background_1249034-36162.jpg?w=826',
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
      loaders={addCompanyLoading || updateCompanyLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
      <FormHeaderContainerStyled>
        <FormHeaderTextStyled TextMode="Htitlenormal">
          Company Form Information
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
      <Formdropdowncontroller
        Label="City"
        name="cityId"
        placeholder="City"
        rules={{
          required: true,
        }}
        loading={cityLoading}
        data={citysdata}
      />
      <StateContainerStyled>
        <Text TextMode="Title">State</Text>
        <Text TextMode="Text">{getStateInfo}</Text>
      </StateContainerStyled>
    </FormContainer>
  );
};

export default Form;
