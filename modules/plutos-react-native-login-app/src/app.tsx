import React from 'react';
import {PlutosReactNativeUIProvider} from 'plutos-react-native-ui';
import {AccountsAppStack} from 'plutos-react-native-accounts-app';
import {SignInScreen} from './screens/sign-in/sign-in';
import {SignUpScreen} from './screens/sign-up/sign-up';
import {LandingScreen} from './screens/landing/landing';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from './hooks/use-auth';
import {LoginContext} from './contexts';
import {ForgotPasswordScreen} from './screens/forgot-password/forgot-password';
import {AccountsContext} from 'plutos-react-native-accounts-app';

type RootStackParamList = StaticParamList<typeof RootStack>;

// type AccountsStackParamList = StaticParamList<typeof AccountsAppStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function useIsSignedIn() {
  const {session} = useAuth();
  return !!session;
}

function useIsSignedOut() {
  const {session} = useAuth();
  return !session;
}

export const LoginAppStack = createNativeStackNavigator({
  screens: {
    Landing: LandingScreen,
    ForgotPassword: ForgotPasswordScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  screenOptions: {headerShown: false},
});

const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      if: useIsSignedOut,
      screen: LoginAppStack,
    },
    AccountsStack: {
      if: useIsSignedIn,
      screen: AccountsAppStack,
    },
  },
  screenOptions: {headerShown: false},
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return (
    <PlutosReactNativeUIProvider>
      <LoginContext>
        <AccountsContext>
          <Navigation />
        </AccountsContext>
      </LoginContext>
    </PlutosReactNativeUIProvider>
  );
}
