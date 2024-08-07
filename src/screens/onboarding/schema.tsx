import * as yup from 'yup';
export const Schema = yup
  .object({
    firstname: yup.string().required('First Name Should be required'),
    lastname: yup.string().required('Last Name Should be required'),
    address: yup.string().required('Address Should be required'),
  })
  .required();
