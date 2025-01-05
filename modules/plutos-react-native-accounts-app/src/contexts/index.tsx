import React from 'react';
import {ReactNode} from 'react';
import {ServiceDependenciesProvider} from './service-dependencies-context';
import {AccountsMemoryService} from '../services/accounts-memory-service';

const accountsService = new AccountsMemoryService();

export function AccountsContext({children}: {children: ReactNode}) {
  return (
    <ServiceDependenciesProvider accountsService={accountsService}>
      {children}
    </ServiceDependenciesProvider>
  );
}
