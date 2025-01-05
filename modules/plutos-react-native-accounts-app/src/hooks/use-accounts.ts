import {useEffect, useState} from 'react';
import {AccountsService} from '../services/contracts/accounts-service';
import {AccountList} from '../services/contracts/accounts';

export type UseAccountsProps = {
  accountsService: AccountsService;
};

export function useAccounts({accountsService}: UseAccountsProps) {
  const [accounts, setAccounts] = useState<AccountList[]>([]);

  useEffect(() => {
    fetch();
  });

  async function fetch() {
    accountsService.list().then(setAccounts);
  }

  return {accounts};
}
