import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {useServiceDependencies} from '../hooks/use-service-dependencies';
import {TransactionCreate, TransactionList} from '../types/transactions';
import {TransactionForm} from '../components/transaction-form/transaction-form';
import {Modal, Wrapper} from 'plutos-react-native-ui';

type TransactionsContextType = {
  lastTransactions: TransactionList[];
  create(props: TransactionCreate): Promise<void>;
  openTransactionForm(): void;
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsContext =
  createContext<TransactionsContextType | null>(null);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const {transactionsService} = useServiceDependencies();
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [lastTransactions, setLastTransactions] = useState<TransactionList[]>(
    [],
  );

  const fetch = useCallback(async () => {
    transactionsService.list().then(setLastTransactions);
  }, [transactionsService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  function openTransactionForm() {
    setShowTransactionForm(true);
  }

  function closeTransactionForm() {
    setShowTransactionForm(false);
  }

  async function create(params: TransactionCreate) {
    await transactionsService.create(params).then(fetch);
  }

  return (
    <TransactionsContext.Provider
      value={{lastTransactions, create, openTransactionForm}}>
      {children}
      <Modal
        presentationStyle="formSheet"
        visible={showTransactionForm}
        onRequestClose={closeTransactionForm}
        animationType="slide">
        <Wrapper py={7} px={7}>
          <TransactionForm
            onSubmit={async data => {
              create(data);
              closeTransactionForm();
            }}
          />
        </Wrapper>
      </Modal>
    </TransactionsContext.Provider>
  );
}
