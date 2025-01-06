import React, {createContext} from 'react';
import {AccountsService} from '../services/contracts/accounts-service';
import {TransactionsService} from '../services/contracts/transactions-service';

type ServiceDependenciesContextType = {
  accountsService: AccountsService;
  transactionsService: TransactionsService;
};

export const ServiceDependenciesContext =
  createContext<ServiceDependenciesContextType | null>(null);

export const ServiceDependenciesProvider: React.FC<{
  accountsService: AccountsService;
  transactionsService: TransactionsService;
  children: React.ReactNode;
}> = ({accountsService, transactionsService, children}) => {
  return (
    <ServiceDependenciesContext.Provider
      value={{accountsService, transactionsService}}>
      {children}
    </ServiceDependenciesContext.Provider>
  );
};
