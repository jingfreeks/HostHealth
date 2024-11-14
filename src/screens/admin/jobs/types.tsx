import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type CompanyFormScreenRouteProp = RouteProp<AppNavigationProps, 'JobsForm'>;
export type RoutesProps = {
  route:CompanyFormScreenRouteProp
};

export type StateFormProps = {
  name:string;
  address:string;
  city:string;
  cityId:string;
  stateid:string;
  _id:string;
};


type JobsDetailsScreenRouteProp = RouteProp<AppNavigationProps, 'AdminJobDetails'>;
export type RoutesAdminJobsProps = {
  route: JobsDetailsScreenRouteProp
};

export type JobDetailsProps = {
  image: string;
  address: string;
  jobtitle: string;
  joborderno: string;
  company: string;
  salaryrange: string;
  shift: string;
  jobId:string;
  status:string;
  _id:string;
};