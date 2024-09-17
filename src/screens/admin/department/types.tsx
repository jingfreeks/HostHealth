import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type StateFormScreenRouteProp = RouteProp<AppNavigationProps, 'DepartmentForm'>;
export type RoutesProps = {
  route: StateFormScreenRouteProp
};

export type StateFormProps = {
  name:string;
  _id:string;
};
