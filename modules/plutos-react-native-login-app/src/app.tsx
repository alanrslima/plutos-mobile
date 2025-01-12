import React from 'react';
import {PlutosReactNativeUIProvider} from 'plutos-react-native-ui';
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
import {CoreAppRouter, CoreContext} from 'plutos-react-native-core-app';

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
    CoreStack: {
      if: useIsSignedIn,
      screen: CoreAppRouter,
    },
  },
  screenOptions: {headerShown: false},
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return (
    <PlutosReactNativeUIProvider>
      <LoginContext>
        <CoreContext>
          <Navigation />
        </CoreContext>
      </LoginContext>
    </PlutosReactNativeUIProvider>
  );
}
