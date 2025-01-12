import React, {createContext} from 'react';
import {AccountsService} from '../services/contracts/accounts-service';
import {TransactionsService} from '../services/contracts/transactions-service';
import {CategoriesService} from '../services/contracts/categories-service';

type ServiceDependenciesContextType = {
  accountsService: AccountsService;
  transactionsService: TransactionsService;
  categoriesService: CategoriesService;
};

export const ServiceDependenciesContext =
  createContext<ServiceDependenciesContextType | null>(null);

export const ServiceDependenciesProvider: React.FC<{
  accountsService: AccountsService;
  transactionsService: TransactionsService;
  categoriesService: CategoriesService;
  children: React.ReactNode;
}> = ({accountsService, transactionsService, categoriesService, children}) => {
  return (
    <ServiceDependenciesContext.Provider
      value={{accountsService, transactionsService, categoriesService}}>
      {children}
    </ServiceDependenciesContext.Provider>
  );
};
