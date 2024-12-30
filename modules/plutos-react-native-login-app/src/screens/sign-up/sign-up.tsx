import React from 'react';
import {
  NavigationHeader,
  ScreenContainer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/use-auth';
import {SignUpForm} from '../../components/sign-up-form/sign-up-form';

export function SignUpScreen() {
  const navigation = useNavigation();
  const {signUp} = useAuth();

  async function onSubmit(name: string, email: string, password: string) {
    await signUp(name, email, password);
    navigation.navigate('Login', {screen: 'SignIn'});
  }

  function onPressSignIn() {
    navigation.navigate('Login', {screen: 'SignIn'});
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader navigation={navigation} title="" />}>
      <Wrapper py={7} px={7}>
        <SignUpForm onPressSignIn={onPressSignIn} onSubmit={onSubmit} />
      </Wrapper>
    </ScreenContainer>
  );
}
