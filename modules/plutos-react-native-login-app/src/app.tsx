import React from 'react';
import {HomeScreen} from './screens/home/home';
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

const RootStack = createNativeStackNavigator({
  screens: {
    // Landing: LandingScreen,
    // SignUp: SignUpScreen,
    // SignIn: SignInScreen,
    // AccountsAppStack,
    Home: {
      if: useIsSignedIn,
      screen: HomeScreen,
    },
    Accounts: {
      if: useIsSignedIn,
      screen: AccountsAppStack,
    },
    Landing: {
      if: useIsSignedOut,
      screen: LandingScreen,
    },
    SignIn: {
      if: useIsSignedOut,
      screen: SignInScreen,
    },
    SignUp: {
      if: useIsSignedOut,
      screen: SignUpScreen,
    },
  },

  screenOptions: {headerShown: false},
});

const Navigation = createStaticNavigation(RootStack);

export function App() {
  return (
    <PlutosReactNativeUIProvider>
      <LoginContext>
        <Navigation />
      </LoginContext>
    </PlutosReactNativeUIProvider>
  );
}
