import React, {useState, useMemo, useCallback,useEffect} from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormContainerStyled,
  FormHeaderTextStyled,
  ProfileAvatarContainerStyled,
} from './styles';
import {
  FormTextController,
  Formdropdowncontroller,
  Bbutton,
  Avatar,
} from '@/component';
import {useCityHooks} from './hooks';
import {colors} from '@/utils/themes';
import {FormProvider} from 'react-hook-form';
import type {RoutesProps} from './types';
import {useStateHooks} from '@/screens/admin/state/hooks';

const Form = (props: RoutesProps) => {
  const {route} = props;
  const {name, state, _id, image} = useMemo(()=>{
    return route?.params || {}
  },[route]);
  
  const {
    uri,
    addStateLoading,
    updateStateLoading,
    formMethod,
    onSubmit,
    handleViewImage,
    setUri
  } = useCityHooks();

  const [isFocus, setIsFocus] = useState(false);

  useEffect(()=>{
    formMethod.setValue('name',name)
    formMethod.setValue('state',state)
    formMethod.setValue('cityImage',image)
    setUri(image)
    formMethod.setValue('id',_id)
  },[name, state, _id, image,setUri])
  console.log('name',name)
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
    <FormContainerStyled>
      <FormProvider {...formMethod}>
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
        <Bbutton
          bcolor={colors.lightergreen}
          border={10}
          loaders={addStateLoading || updateStateLoading}
          title="Save"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </FormContainerStyled>
  );
};

export default Form;
