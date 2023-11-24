import * as yup from 'yup';
export const Schema = yup
  .object({
    username: yup.string().required('Username Should be required'),
    password: yup.string().required('Password Should be required'),
  })
  .required();
