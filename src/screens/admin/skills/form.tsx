import React from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {FormTextController, FormContainer} from '@/component';
import {useSkillsHooks} from './hooks';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddSkillsMutation, useUpdateSkillsMutation} from '@/slice';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';

const Form = (props: RoutesProps) => {
  const {navigation} = useSkillsHooks();
  const {route} = props;
  const {name, _id} = route?.params || {};
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addSkills, {isLoading: addSkillsLoading}] = useAddSkillsMutation();
  const [updateSkills, {isLoading: updateSkillsLoading}] =
  useUpdateSkillsMutation();
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateSkills({
          name: data?.name,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addSkills({
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
    <FormContainer
      btnTestId="bankFormButtonSubmitTestId"
      formMethod={formMethod}
      loaders={addSkillsLoading || updateSkillsLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
      <FormHeaderContainerStyled>
        <FormHeaderTextStyled TextMode="Htitlenormal">
          Skill Form Information
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
