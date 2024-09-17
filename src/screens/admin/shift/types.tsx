import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type StateFormScreenRouteProp = RouteProp<AppNavigationProps, 'ShiftForm'>;
export type RoutesProps = {
  route: StateFormScreenRouteProp
};

export type StateFormProps = {
  title:string;
  _id:string;
};
