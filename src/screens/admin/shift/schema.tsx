import * as yup from 'yup';
import {message} from '@/config/constant'

export const Schema = yup
  .object({
    name: yup.string().required(message[100006]),
  })
  .required();
