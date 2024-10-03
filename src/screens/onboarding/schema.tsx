import * as yup from 'yup';
import {message} from '@/config/constant'
export const ProfileSchema = yup
  .object({
    firstName: yup.string().required(message[100016]),
    lastName: yup.string().required(message[100017]),
    middleName: yup.string().required(message[100018]),
    profileImage:yup.string().required(message[100019]),
  })
  .required();

export const BankInfoSchema = yup
  .object({
    accountName: yup.string().required(message[100020]),
    accountNumber: yup.string().required(message[100021]),
    bankName: yup.string().required(message[100021]),
  })
  .required();
