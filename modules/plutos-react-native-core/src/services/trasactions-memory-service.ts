import {
  getCurrencyNameByCurrency,
  getIsoCodeByLocale,
  randomUUID,
} from 'plutos-react-native-commun';
import {TransactionCreate, TransactionList} from '../types/transactions';
import {TransactionsService} from './contracts/transactions-service';

export class TransactionsMemoryService implements TransactionsService {
  public data: TransactionList[];

  constructor(mock?: TransactionList[]) {
    this.data = mock || [];
  }

  async list(): Promise<TransactionList[]> {
    return this.data;
  }

  async create(params: TransactionCreate): Promise<void> {
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
