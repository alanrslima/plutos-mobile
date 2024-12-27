import React from 'react';
import {HomeScreen} from './screens/home/home';
import {PlutosReactNativeUIProvider} from 'plutos-react-native-ui';

export function App() {
  return (
    <PlutosReactNativeUIProvider>
      <HomeScreen />
    </PlutosReactNativeUIProvider>
  );
}
