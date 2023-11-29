import * as yup from 'yup';
export const Schema = yup
  .object({
    username: yup.string().required('User Name Should be required'),
    password: yup
      .string()
      .required('Password Should be required')
      .min(8, 'Your Password is too short'),
    cpassword: yup
      .string()
      .required('Please re type your password')
      .oneOf([yup.ref('password')], 'Your password does not match'),
  })
  .required();
