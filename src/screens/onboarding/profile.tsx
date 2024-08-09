import React from 'react';
import {Avatar, FormTextController} from '@/component/molecules';
import {Prevnextfooter} from '@/component/template'
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled, 
} from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, FormProvider} from 'react-hook-form';
import * as yup from 'yup';
import {Schema} from './schema';
const ProfileScreen = () => {
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      address: '',
    },
    resolver: yupResolver(Schema),
  });

  const handleOnPrevious=()=>{

  }
  const handleOnNext=()=>{

  }
  return (
    <ContainerStyled>
      <FormProvider {...formMethod}>
        <ProfileAvatarContainerStyled>
          <Avatar />
        </ProfileAvatarContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="First Name"
            name="firstname"
            placeholder="First Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Last Name"
            name="lastname"
            placeholder="Last Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Address"
            name="address"
            placeholder="Address"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <Prevnextfooter nextOnPress={handleOnNext} prevOnPress={handleOnPrevious}/>
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileScreen;
