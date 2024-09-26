import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type StateFormScreenRouteProp = RouteProp<AppNavigationProps, 'BankForm'>;
export type RoutesProps = {
  route: StateFormScreenRouteProp
};

export type StateFormProps = {
  name:string;
  address:string;
  _id:string;
};
