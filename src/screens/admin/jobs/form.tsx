import React, {useCallback, useMemo, useEffect} from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormHeaderTextStyled,
  DropdownContainerStyled,
} from './styles';
import {
  FormTextController,
  Text,
  Avatar,
  FormContainer,
} from '@/component';
import {useJobsHooks} from './hooks';
import {useForm,SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddJobsMutation, useUpdateJobsMutation} from '@/slice';
import {launchImageLibrary} from 'react-native-image-picker';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';
import {Formdropdowncontroller} from '@/component';
import Config from 'react-native-config';

const Form = (props: RoutesProps) => {
  const {
    navigation,
    companyData,
    companyLoading,
    shiftData,
    shiftIsLoading,
    deptData,
    depIsLoading,
    uri,
    setUri,
    uploadProfile,
    options,
  } = useJobsHooks();
  const {route} = props;

  const {image, jobtitle, company, department, shift, salaryrange, _id} =
    useMemo(() => {
      return route?.params || {};
    }, [route]);

  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      image: '',
      company: '',
      jobtitle: '',
      department: '',
      shift: '',
      salaryrange: '',
      id: '',
    },
    resolver: yupResolver(Schema),
  });

  useEffect(() => {
    formMethod.setValue('image', image);
    formMethod.setValue('company', company);
    formMethod.setValue('jobtitle', jobtitle);
    formMethod.setValue('department', department);
    formMethod.setValue('shift', shift);
    formMethod.setValue('salaryrange', salaryrange);
    setUri(image);
    formMethod.setValue('id', _id);
  }, [
    company,
    jobtitle,
    department,
    shift,
    salaryrange,
    _id,
    image,
    setUri,
  ]);

  const [addJobs, {isLoading: addJobsLoading}] = useAddJobsMutation();
  const [updateJobs, {isLoading: updateJobsLoading}] = useUpdateJobsMutation();

  const handleViewImage = useCallback(async () => {
    const result: any = await launchImageLibrary(options);
    if (result?.assets) {
      const response = await uploadProfile(result);
      const {data}: any = (await response) || {};
      formMethod.setValue('image', `${Config.DEV_BASE_URL}${data?.url}`);
      setUri(`${Config.DEV_BASE_URL}/${data?.url}`);
    }
  }, [uri]);

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateJobs({
          image: data?.image,
          jobtitle: data?.jobtitle,
          compId: data?.company,
          deptId: data.department,
          weeks: 2,
          shiftId: data.shift,
          match: 2,
          salaryrange: data.salaryrange,
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addJobs({
          image: data?.image,
          jobtitle: data?.jobtitle,
          compId: data?.company,
          deptId: data.department,
          weeks: 2,
          shiftId: data.shift,
          match: 2,
          salaryrange: data.salaryrange,
        });
      }

      if (response?.error) {
        alert(response?.error?.data?.message);
      } else {
        navigation.goBack();
      }
    } catch (error) {
      console.log('errorss', error);
    }
  };

  return (
    <FormContainer
      formMethod={formMethod}
      loaders={addJobsLoading || updateJobsLoading}
      onPress={formMethod.handleSubmit(onSubmit)}>
        <FormHeaderContainerStyled>
          <FormHeaderTextStyled TextMode="Htitlenormal">
            Jobs Form Information
          </FormHeaderTextStyled>
          <FormTextInputContainerStyled>
            <Avatar
              isView
              testIds={{uploadImage: 'ProfileAvatarUploadImageTestId'}}
              uri={uri}
              size={250}
              onPress={handleViewImage}
            />
          </FormTextInputContainerStyled>
        </FormHeaderContainerStyled>

        <FormTextInputContainerStyled>
          <FormTextController
            Label="Job Title"
            name="jobtitle"
            placeholder="Job Title"
            rules={{
              required: true,
            }}
          />
        </FormTextInputContainerStyled>
        <DropdownContainerStyled>
          <Text TextMode="Title">Company</Text>
          <Formdropdowncontroller
            Label="Company"
            name="company"
            placeholder="Company"
            rules={{
              required: true,
            }}
            loading={companyLoading}
            data={companyData}
          />
        </DropdownContainerStyled>
        <DropdownContainerStyled>
          <Text TextMode="Title">Department</Text>
          <Formdropdowncontroller
            Label="Department"
            name="department"
            placeholder="Department"
            rules={{
              required: true,
            }}
            loading={depIsLoading}
            data={deptData}
          />
        </DropdownContainerStyled>
        <Text TextMode="Title">Shift</Text>
        <Formdropdowncontroller
          Label="Shift"
          name="shift"
          placeholder="Shift"
          rules={{
            required: true,
          }}
          loading={shiftIsLoading}
          data={shiftData}
        />

        <FormTextInputContainerStyled>
          <FormTextController
            Label="Salary Range"
            name="salaryrange"
            placeholder="Salary Range"
            rules={{
              required: true,
            }}
          />
        </FormTextInputContainerStyled>
    </FormContainer>
  );
};

export default Form;
