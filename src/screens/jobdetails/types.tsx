import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type JobsDetailsScreenRouteProp = RouteProp<AppNavigationProps, 'JobsDetails'>;
export type RoutesProps = {
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
  _id:string;
};
