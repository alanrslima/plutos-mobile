import {useContext} from 'react';
import {AccountsContext} from '../contexts/accounts-context';

export const useAccounts = () => {
  const context = useContext(AccountsContext);
  if (!context) {
    throw new Error('useAccounts must be used within a AccountsProvider');
  }
  return context;
};
