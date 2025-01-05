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
import {WrapperRegister} from './sign-in.styles';

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
    navigation.navigate('Login', {screen: 'SignUp'});
  }

  function onPressForgotPassword() {
    navigation.navigate('Login', {screen: 'ForgotPassword'});
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader navigation={navigation} />}>
      <Wrapper py={7} px={7}>
        <SignInForm
          onPressForgotPassword={onPressForgotPassword}
          onSubmit={onSubmit}
        />
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

        <WrapperRegister>
          <Typography type="body-large-bold">
            New to Plutos?{' '}
            <Link type="body-large-bold" onPress={onPressRegister}>
              Register
            </Link>
          </Typography>
        </WrapperRegister>
      </Wrapper>
    </ScreenContainer>
  );
}
