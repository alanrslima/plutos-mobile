import {useContext} from 'react';
import {ServiceDependenciesContext} from '../contexts/service-dependencies-context';

export const useServiceDependencies = () => {
  const context = useContext(ServiceDependenciesContext);
  if (!context) {
    throw new Error(
      'useServiceDependencies must be used within a ServiceDependenciesProvider',
    );
  }
  return context;
};
