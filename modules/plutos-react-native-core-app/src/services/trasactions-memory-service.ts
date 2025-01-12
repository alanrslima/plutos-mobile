import {getIsoCodeByLocale, randomUUID} from 'plutos-react-native-commun';
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
        account: {
          id: params.accountId,
          currency: 'BRL',
          locale: 'pt-BR',
          name: 'Account name',
          currencyName: 'Brazilian real',
          isoCode: getIsoCodeByLocale('PT-br'),
        },
        id: randomUUID(),
      },
      ...this.data,
    ];
  }
}
