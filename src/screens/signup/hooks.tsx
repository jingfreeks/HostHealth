import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
export const UseSignUpHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleSignUp = () => {
    navigation.navigate('app');
  };
  return {
    handleSignUp,
  };
};
