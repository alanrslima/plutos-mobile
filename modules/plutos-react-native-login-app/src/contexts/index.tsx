import React from 'react';
import {ReactNode} from 'react';
import {AuthProvider} from './auth-context';
import {ServiceDependenciesProvider} from './service-dependencies-context';
import {AuthMemoryService} from '../services/auth-memory-service';

const authService = new AuthMemoryService();

export function LoginContext({children}: {children: ReactNode}) {
  return (
    <ServiceDependenciesProvider authService={authService}>
      <AuthProvider>{children}</AuthProvider>
    </ServiceDependenciesProvider>
  );
}
