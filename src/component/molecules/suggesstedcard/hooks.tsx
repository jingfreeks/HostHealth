import {useNavigation} from '@react-navigation/native';
export const UseSuggestedCardHooks = () => {
  const navigation = useNavigation();
  const handlesubmit = data => {
    navigation.navigate('JobsDetails', {jobdetail: data});
  };
  return {
    handlesubmit,
  };
};
