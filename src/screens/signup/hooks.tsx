import {useNavigation} from '@react-navigation/native';

export const UseSignUpHooks = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('app');
  };
  return {
    handleSignUp,
  };
};
