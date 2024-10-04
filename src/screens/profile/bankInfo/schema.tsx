import * as yup from 'yup';
import {message} from '@/config/constant'

export const BankInfoSchema = yup
  .object({
    accountName: yup.string().required(message[100020]),
    accountNumber: yup.string().required(message[100021]),
    bankName: yup.string().required(message[100021]),
  })
  .required();
