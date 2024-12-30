import React, {createContext} from 'react';
import {AuthService} from '../services/contracts/auth-service';

type ServiceDependenciesContextType = {
  authService: AuthService;
};

export const ServiceDependenciesContext =
  createContext<ServiceDependenciesContextType | null>(null);

export const ServiceDependenciesProvider: React.FC<{
  authService: AuthService;
  children: React.ReactNode;
}> = ({authService, children}) => {
  return (
    <ServiceDependenciesContext.Provider value={{authService}}>
      {children}
    </ServiceDependenciesContext.Provider>
  );
};
