import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type StateFormScreenRouteProp = RouteProp<AppNavigationProps, 'Cityform'>;
export type RoutesProps = {
  route: StateFormScreenRouteProp
};

export type StateFormProps = {
  name:string;
  state:string;
  _id:string;
};
