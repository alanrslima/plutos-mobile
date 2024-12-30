import React from 'react';
import {
  Button,
  NavigationHeader,
  ScreenContainer,
  Spacer,
  Wrapper,
  Divider,
  Typography,
  Link,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/use-auth';
import {Alert} from 'react-native';
import {SignInForm} from '../../components/sign-in-form/sign-in-form';

export function SignInScreen() {
  const navigation = useNavigation();

  const {signInWithEmailAndPassword} = useAuth();

  async function onSubmit(email: string, passowrd: string) {
    try {
      await signInWithEmailAndPassword(email, passowrd);
    } catch (error) {
      Alert.alert(String(error));
    }
  }

  function onPressRegister() {
    navigation.navigate('SignUp');
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader navigation={navigation} />}>
      <Wrapper py={7} px={7}>
        <SignInForm onSubmit={onSubmit} />
        <Divider label="OR" />
        <Button
          title="Login with Google"
          leadingIcon="GlobeLock"
          variant="tertiary"
          size="lg"
          full
        />
        <Spacer h={4} />
        <Button
          title="Login with Apple"
          leadingIcon="Apple"
          variant="tertiary"
          size="lg"
          full
        />
        <Spacer h={7} />

        <Typography type="body-default-bold">
          New to Plutos? <Link onPress={onPressRegister}>Register</Link>
        </Typography>
      </Wrapper>
    </ScreenContainer>
  );
}
