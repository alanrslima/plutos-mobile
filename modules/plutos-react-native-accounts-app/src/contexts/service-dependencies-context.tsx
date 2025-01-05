import React, {createContext} from 'react';
import {AccountsService} from '../services/contracts/accounts-service';

type ServiceDependenciesContextType = {
  accountsService: AccountsService;
};

export const ServiceDependenciesContext =
  createContext<ServiceDependenciesContextType | null>(null);

export const ServiceDependenciesProvider: React.FC<{
  accountsService: AccountsService;
  children: React.ReactNode;
}> = ({accountsService, children}) => {
  return (
    <ServiceDependenciesContext.Provider value={{accountsService}}>
      {children}
    </ServiceDependenciesContext.Provider>
  );
};
