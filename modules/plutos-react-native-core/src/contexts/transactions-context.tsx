import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {useServiceDependencies} from '../hooks/use-service-dependencies';
import {TransactionCreate, TransactionList} from '../types/transactions';

type TransactionsContextType = {
  lastTransactions: TransactionList[];
  create(props: TransactionCreate): Promise<void>;
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsContext =
  createContext<TransactionsContextType | null>(null);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const {transactionsService} = useServiceDependencies();
  const [lastTransactions, setLastTransactions] = useState<TransactionList[]>(
    [],
  );

  const fetch = useCallback(async () => {
    transactionsService.list().then(setLastTransactions);
  }, [transactionsService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function create(params: TransactionCreate) {
    transactionsService.create(params).then(fetch);
  }

  return (
    <TransactionsContext.Provider value={{lastTransactions, create}}>
      {children}
    </TransactionsContext.Provider>
  );
}
