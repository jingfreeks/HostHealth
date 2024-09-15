import * as yup from 'yup';
export const Schema = yup
  .object({
    name: yup.string().required('State Name Should be required'),
  })
  .required();
