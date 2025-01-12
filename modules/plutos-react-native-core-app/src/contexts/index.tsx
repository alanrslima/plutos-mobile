import React from 'react';
import {ReactNode} from 'react';
import {ServiceDependenciesProvider} from './service-dependencies-context';
import {AccountsMemoryService} from '../services/accounts-memory-service';
import {AccountsProvider} from './accounts-context';
import {TransactionsMemoryService} from '../services/trasactions-memory-service';
import {TransactionsProvider} from './transactions-context';
import {CategoriesMemoryService} from '../services/categories-memory-service';
import {CategoriesProvider} from './categories-context';

const accountsService = new AccountsMemoryService();
const categoriesService = new CategoriesMemoryService([
  {id: '1', name: 'Supermercado'},
  {id: '2', name: 'Casa'},
]);
const transactionsService = new TransactionsMemoryService([
  {
    account: {
      currency: 'BRL',
      id: '1',
      locale: 'pt-BR',
      name: 'Nubank',
      currencyName: 'Brazilian real',
      isoCode: 'br',
    },
    date: new Date(),
    id: '1',
    name: 'Supermercado',
    value: 100,
  },
]);

export function CoreContext({children}: {children: ReactNode}) {
  return (
    <ServiceDependenciesProvider
      categoriesService={categoriesService}
      accountsService={accountsService}
      transactionsService={transactionsService}>
      <CategoriesProvider>
        <AccountsProvider>
          <TransactionsProvider>{children}</TransactionsProvider>
        </AccountsProvider>
      </CategoriesProvider>
    </ServiceDependenciesProvider>
  );
}
