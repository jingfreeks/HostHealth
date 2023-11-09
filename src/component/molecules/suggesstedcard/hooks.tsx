import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {AppNavigationProps} from '@/navigation/types';
import type {SuggestedCardDetailsProps} from './types';
export const UseSuggestedCardHooks = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigationProps>>();
  const handlesubmit = (data: SuggestedCardDetailsProps) => {
    navigation.navigate('JobsDetails', {jobdetail: data});
  };
  return {
    handlesubmit,
  };
};
