import React from 'react';
import {HomeScreen} from './screens/home/home';
import {PlutosReactNativeUIProvider} from 'plutos-react-native-ui';
import {AccountsAppRouter} from 'plutos-react-native-accounts-app';

export function App() {
  return (
    <PlutosReactNativeUIProvider>
      {/* <HomeScreen /> */}
      <AccountsAppRouter />
    </PlutosReactNativeUIProvider>
  );
}
