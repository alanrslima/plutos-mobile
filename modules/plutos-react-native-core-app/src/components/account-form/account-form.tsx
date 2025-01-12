import React, {useMemo, useState} from 'react';
import {
  CurrencyInput,
  Spacer,
  TextInput,
  Select,
  SelectOptionProps,
  Form,
} from 'plutos-react-native-ui';
import {currencyList} from 'plutos-react-native-commun';
import {ScrollView} from 'react-native';
import {AccountCreate} from '../../types/accounts';

const currencyOptions: SelectOptionProps[] = currencyList.map(item => ({
  value: item.currency,
  title: item.name,
  description: `${item.country} • ${item.currency}`,
  leadingFlag: item.isoCode,
}));

export type AccountFormProps = {
  onSubmit(data: AccountCreate): Promise<void>;
};

export function AccountForm(props: AccountFormProps) {
  const [initialBalance, setInitialBalance] = useState('0');
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState(currencyOptions[0].value);

  const currencyItem = useMemo(() => {
    return currencyList.find(item => item.currency === currency);
  }, [currency]);

  async function onSubmit() {
    await props.onSubmit({
      currency,
      initialBalance: Number(initialBalance),
      locale: currencyItem?.locale!,
      name,
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <ScrollView>
        <CurrencyInput
          value={initialBalance}
          locale={currencyItem?.locale!}
          currency={currencyItem?.currency!}
          onSaveValue={setInitialBalance}
          label="Initial balance"
        />
        <Spacer h={5} />
        <TextInput value={name} onChangeText={setName} label="Name" />

        <Spacer h={5} />
        <Select
          value={currency}
          onSelect={setCurrency}
          options={currencyOptions}
          label="Type"
        />
      </ScrollView>
    </Form>
  );
}
