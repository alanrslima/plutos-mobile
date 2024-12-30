import React, {useState} from 'react';
import {
  Button,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  TextInput,
  Typography,
  Wrapper,
  Link,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/use-auth';
import {SignUpForm} from '../../components/sign-up-form/sign-up-form';

export function SignUpScreen() {
  const navigation = useNavigation();
  const {signUp} = useAuth();

  async function onSubmit(name: string, email: string, password: string) {
    await signUp(name, email, password);
    navigation.navigate('SignIn');
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader navigation={navigation} title="" />}>
      <Wrapper py={7} px={7}>
        <SignUpForm onSubmit={onSubmit} />
      </Wrapper>
    </ScreenContainer>
  );
}
