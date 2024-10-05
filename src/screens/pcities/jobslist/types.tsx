import { RouteProp } from '@react-navigation/native';
import type {AppNavigationProps} from '@/navigation/types';

type CityJobsScreenRouteProp = RouteProp<AppNavigationProps, 'CityJobsList'>;

export type RoutesProps = {
  route: CityJobsScreenRouteProp
};

export type JobsCityProps = {
  cityId:string;
};
