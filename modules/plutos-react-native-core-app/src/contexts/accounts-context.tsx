import React, {useCallback} from 'react';
import {createContext, useEffect, useState} from 'react';
import {AccountCreate, AccountList} from '../types/accounts';
import {useServiceDependencies} from '../hooks/use-service-dependencies';
import {Modal, Wrapper} from 'plutos-react-native-ui';
import {AccountForm} from '../components/account-form/account-form';

type AccountsContextType = {
  accounts: AccountList[];
  openAccountForm(): void;
  create(props: AccountCreate): Promise<void>;
};

type AccountsProviderProps = {
  children: React.ReactNode;
};

export const AccountsContext = createContext<AccountsContextType | null>(null);

export function AccountsProvider({children}: AccountsProviderProps) {
  const {accountsService} = useServiceDependencies();
  const [accounts, setAccounts] = useState<AccountList[]>([]);
  const [showAccountForm, setShowAccountForm] = useState(false);

  const fetch = useCallback(async () => {
    accountsService.list().then(setAccounts);
  }, [accountsService]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  async function create(params: AccountCreate) {
    accountsService.create(params).then(fetch);
    closeAccountForm();
  }

  function openAccountForm() {
    setShowAccountForm(true);
  }

  function closeAccountForm() {
    setShowAccountForm(false);
  }

  return (
    <AccountsContext.Provider value={{accounts, create, openAccountForm}}>
      {children}
      <Modal
        navigationHeader={{title: 'Accounts'}}
        visible={showAccountForm}
        onRequestClose={closeAccountForm}>
        <Wrapper px={7} py={7}>
          <AccountForm onSubmit={create} />
        </Wrapper>
      </Modal>
    </AccountsContext.Provider>
  );
}
