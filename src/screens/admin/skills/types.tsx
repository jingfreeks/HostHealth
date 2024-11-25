import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';
type SkillsFormScreenRouteProp = RouteProp<AppNavigationProps, 'SkillsForm'>;
export type RoutesProps = {
  route: SkillsFormScreenRouteProp
};

export type StateFormProps = {
  name:string;
  address:string;
  _id:string;
};
