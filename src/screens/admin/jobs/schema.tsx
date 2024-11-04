import * as yup from 'yup';
import {message} from '@/config/constant'
export const Schema = yup
  .object({
    image: yup.string().required(message[100025]),
    company:yup.string().required(message[100010]),
    jobtitle:yup.string().required(message[100026]),
    department:yup.string().required(message[100005]),
    shift:yup.string().required(message[100006]),
    salaryrange:yup.string().required(message[100027]),
    id:yup.string()
  })
  .required();
  