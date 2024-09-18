import * as yup from 'yup';
import {message} from '@/config/constant'
export const Schema = yup
  .object({
    name: yup.string().required(message[100010]),
    address:yup.string().required(message[100011]),
    city:yup.string().required(message[100009]),
    state:yup.string().required(message[100012])
  })
  .required();
