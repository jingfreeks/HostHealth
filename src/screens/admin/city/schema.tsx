import * as yup from 'yup';
export const Schema = yup
  .object({
    name: yup.string().required('City Name Should be required'),
  })
  .required();
