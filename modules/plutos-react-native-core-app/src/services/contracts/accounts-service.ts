import {AccountCreate, AccountList} from '../../types/accounts';

export interface AccountsService {
  list(): Promise<AccountList[]>;
  create(params: AccountCreate): Promise<void>;
}
