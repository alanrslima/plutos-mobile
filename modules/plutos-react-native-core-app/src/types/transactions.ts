export type TransactionList = {
  id: string;
  name: string;
  value: number;
  date: Date;
  account: {
    id: string;
    name: string;
    locale: string;
    currency: string;
    isoCode?: string;
    currencyName?: string;
  };
};

export type TransactionCreate = {
  name: string;
  value: number;
  accountId: string;
  categoryId?: string;
  date: Date;
};
