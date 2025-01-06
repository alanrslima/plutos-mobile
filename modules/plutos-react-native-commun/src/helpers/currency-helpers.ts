import {currencyList} from './currency-list';

export const formatCurrency = (
  value: number,
  locale: string,
  currency: string,
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export function getIsoCodeByLocale(locale: string) {
  const item = currencyList.find(i => i.locale === locale);
  return item?.isoCode;
}

export function getCurrencyNameByCurrency(currency: string) {
  const item = currencyList.find(i => i.currency === currency);
  return item?.name;
}
