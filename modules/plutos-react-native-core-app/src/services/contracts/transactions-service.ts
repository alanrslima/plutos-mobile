import {TransactionCreate, TransactionList} from '../../types/transactions';

export interface TransactionsService {
  list(): Promise<TransactionList[]>;
  create(params: TransactionCreate): Promise<void>;
}
