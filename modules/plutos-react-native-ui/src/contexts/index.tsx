import React from 'react';
import {DeviceProvider} from './device-context';
import {ThemeProvider} from './theme-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PortalProvider} from '@gorhom/portal';

export const PlutosReactNativeUIProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  return (
    <SafeAreaProvider>
      <DeviceProvider>
        <ThemeProvider>
          <PortalProvider>{children}</PortalProvider>
        </ThemeProvider>
      </DeviceProvider>
    </SafeAreaProvider>
  );
};
