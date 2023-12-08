import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type ProfileScreenRouteProp = RouteProp<AppNavigationProps, 'JobsDetails'>;
export type RoutesProps = {
  route: ProfileScreenRouteProp
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
