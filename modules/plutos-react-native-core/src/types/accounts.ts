export type AccountList = {
  id: string;
  name: string;
  balance: number;
  locale: string;
  currency: string;
  isoCode?: string;
  currencyName?: string;
};

export type AccountCreate = {
  name: string;
  initialBalance: number;
  locale: string;
  currency: string;
};
