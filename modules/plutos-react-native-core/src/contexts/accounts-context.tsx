import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {AccountCreate, AccountList} from '../types/accounts';
import {useServiceDependencies} from '../hooks/use-service-dependencies';

type AccountsContextType = {
  accounts: AccountList[];
  create(props: AccountCreate): Promise<void>;
};

type AccountsProviderProps = {
  children: React.ReactNode;
};

export const AccountsContext = createContext<AccountsContextType | null>(null);

export function AccountsProvider({children}: AccountsProviderProps) {
  const {accountsService} = useServiceDependencies();
  const [accounts, setAccounts] = useState<AccountList[]>([]);

  const fetch = useCallback(async () => {
    accountsService.list().then(setAccounts);
  }, [accountsService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function create(params: AccountCreate) {
    accountsService.create(params).then(fetch);
  }

  return (
    <AccountsContext.Provider value={{accounts, create}}>
      {children}
    </AccountsContext.Provider>
  );
}
