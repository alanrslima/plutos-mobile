import {AccountList} from './contracts/accounts';
import {AccountsService} from './contracts/accounts-service';

export class AccountsMemoryService implements AccountsService {
  public data: AccountList[];

  constructor(mock?: AccountList[]) {
    this.data = mock || [];
  }

  async list(): Promise<AccountList[]> {
    return this.data;
  }
}
