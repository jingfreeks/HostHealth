import * as yup from 'yup';
export const Schema = yup
  .object({
    firstName: yup.string().required('First Name Should be required'),
    lastName: yup.string().required('Last Name Should be required'),
    middleName: yup.string().required('Middle Name Should be required'),
  })
  .required();
