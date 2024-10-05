import * as yup from 'yup';
import {message} from '@/config/constant'
export const Schema = yup
  .object({
    name: yup.string().required(message[100009]),
    state: yup.string().required(message[100012]),
    cityImage:yup.string().required(message[100019]),
    id:yup.string()
  })
  .required();
