import React, {useMemo, useEffect} from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
  ProfileAvatarContainerStyled,
} from './styles';
import {
  FormTextController,
  Formdropdowncontroller,
  Avatar,
  FormContainer,
} from '@/component';
import {useCityHooks} from './hooks';
import type {RoutesProps} from './types';
import {useStateHooks} from '@/screens/admin/state/hooks';

const Form = (props: RoutesProps) => {
  const {route} = props;
  const {name, state, _id, image} = useMemo(() => {
    return route?.params || {};
  }, [route]);

  const {
    uri,
    addStateLoading,
    updateStateLoading,
    formMethod,
    onSubmit,
    handleViewImage,
    setUri,
  } = useCityHooks();

  useEffect(() => {
    formMethod.setValue('name', name);
    formMethod.setValue('state', state);
    formMethod.setValue('cityImage', image);
    setUri(image);
    formMethod.setValue('id', _id);
  }, [name, state, _id, image, setUri]);

  const {states, isLoading: stateloading} = useStateHooks();

  const statesdata = useMemo(() => {
    let statedata = states;
    return states?.ids?.map((item: string) => {
      return {
        label: statedata?.entities[item]?.name,
        value: item,
      };
    });
  }, [states]);

  return (
    <FormContainer
      formMethod={formMethod}
      loaders={addStateLoading || updateStateLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
      <FormHeaderContainerStyled>
        <FormHeaderTextStyled TextMode="Htitlenormal">
          City Form Information
        </FormHeaderTextStyled>
      </FormHeaderContainerStyled>
      <ProfileAvatarContainerStyled>
        <Avatar
          isView
          testIds={{uploadImage: 'ProfileAvatarUploadImageTestId'}}
          uri={uri}
          size={250}
          onPress={handleViewImage}
        />
      </ProfileAvatarContainerStyled>
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

      <Formdropdowncontroller
        Label="State"
        name="state"
        placeholder="State"
        rules={{
          required: true,
        }}
        loading={stateloading}
        data={statesdata}
      />
    </FormContainer>
  );
};

export default Form;
