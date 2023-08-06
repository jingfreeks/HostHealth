import {useNavigation} from '@react-navigation/native';

export const UseWelcomeHooks = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };
  return {handleSignIn, handleSignUp};
};
