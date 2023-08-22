import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
export const UseWelcomeHooks = () => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };
  return {handleSignIn, handleSignUp};
};
