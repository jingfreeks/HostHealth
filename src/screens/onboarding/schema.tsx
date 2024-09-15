import * as yup from 'yup';

export const ProfileSchema = yup
  .object({
    firstName: yup.string().required('First Name Should be required'),
    lastName: yup.string().required('Last Name Should be required'),
    middleName: yup.string().required('Middle Name Should be required'),
  })
  .required();

export const BankInfoSchema = yup
  .object({
    accountName: yup.string().required('Account Name Should be required'),
    accountNumber: yup.string().required('Account Name Should be required'),
    bankName: yup.string().required('Bank Name Should be required'),
  })
  .required();
