import React from 'react';
import {ReactNode} from 'react';
import {ServiceDependenciesProvider} from './service-dependencies-context';
import {AccountsMemoryService} from '../services/accounts-memory-service';
import {AccountsProvider} from './accounts-context';
import {TransactionsMemoryService} from '../services/trasactions-memory-service';
import {TransactionsProvider} from './transactions-context';

const accountsService = new AccountsMemoryService();
const transactionsService = new TransactionsMemoryService();

export function CoreContext({children}: {children: ReactNode}) {
  return (
    <ServiceDependenciesProvider
      accountsService={accountsService}
      transactionsService={transactionsService}>
      <AccountsProvider>
        <TransactionsProvider>{children}</TransactionsProvider>
      </AccountsProvider>
    </ServiceDependenciesProvider>
  );
}
