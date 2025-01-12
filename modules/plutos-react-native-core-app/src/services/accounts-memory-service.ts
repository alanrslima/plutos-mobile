import {
  getCurrencyNameByCurrency,
  getIsoCodeByLocale,
  randomUUID,
} from 'plutos-react-native-commun';
import {AccountCreate, AccountList} from '../types/accounts';
import {AccountsService} from './contracts/accounts-service';

export class AccountsMemoryService implements AccountsService {
  public data: AccountList[];

  constructor(mock?: AccountList[]) {
    this.data = mock || [];
  }

  async list(): Promise<AccountList[]> {
    return this.data;
  }

  async create(params: AccountCreate): Promise<void> {
    this.data = [
      {
        ...params,
        balance: params.initialBalance,
        id: randomUUID(),
        isoCode: getIsoCodeByLocale(params.locale),
        currencyName: getCurrencyNameByCurrency(params.currency),
      },
      ...this.data,
    ];
  }
}
