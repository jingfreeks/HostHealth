import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type CompanyFormScreenRouteProp = RouteProp<AppNavigationProps, 'CompanyForm'>;
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
