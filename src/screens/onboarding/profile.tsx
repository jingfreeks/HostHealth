import React from 'react';
import {Text} from '@/component/atoms/text';
import {Avatar, FormTextController} from '@/component/molecules';
import {
  ContainerStyled,
  ProfileAvatarContainerStyled,
  TextInputContainerStyled,
  NextButtonStyled,
  PreviousButtonStyled,
  FooterContainerStyled,
  FooterButtonTextStyled
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
        <FooterContainerStyled>
          <PreviousButtonStyled>
            <FooterButtonTextStyled>Previous</FooterButtonTextStyled>
          </PreviousButtonStyled>
          <NextButtonStyled>
            <FooterButtonTextStyled>Next</FooterButtonTextStyled>
          </NextButtonStyled>
        </FooterContainerStyled>
      </FormProvider>
    </ContainerStyled>
  );
};
export default ProfileScreen;
