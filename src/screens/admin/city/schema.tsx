import * as yup from 'yup';
import {message} from '@/config/constant'
export const Schema = yup
  .object({
    name: yup.string().required('City Name Should be required'),
    state: yup.string().required('State Name Should be required')
  })
  .required();
