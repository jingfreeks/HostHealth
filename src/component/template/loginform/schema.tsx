import * as yup from 'yup';
export const Schema = yup
  .object({
    email: yup.string().required('Email Address Should be required'),
    password: yup.string().required('Password Should be required'),
  })
  .required();
