import {AccountList} from './accounts';

export interface AccountsService {
  list(): Promise<AccountList[]>;
}
