import React, {useMemo, useState} from 'react';
import {
  CurrencyInput,
  Form,
  Select,
  SelectOptionProps,
  Spacer,
  TextInput,
} from 'plutos-react-native-ui';
import {ScrollView} from 'react-native';
import {useAccounts} from '../../hooks/use-accounts';
import {TransactionCreate} from '../../types/transactions';

export type TransactionFormProps = {
  onSubmit(data: TransactionCreate): Promise<void>;
};

export function TransactionForm(props: TransactionFormProps) {
  const {accounts} = useAccounts();
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState(
    accounts.length ? accounts[0].id : '',
  );

  const currentAccount = useMemo(() => {
    return accounts.find(account => account.id === accountId);
  }, [accountId, accounts]);

  const accountsOptions = useMemo(() => {
    return accounts.map(account => ({
      title: account.name,
      value: account.id,
      description: account.currencyName,
    })) as SelectOptionProps[];
  }, [accounts]);

  async function onPressSubmit() {
    await props.onSubmit({
      accountId,
      name,
      value: Number(value),
      date: new Date(),
    });
  }

  return (
    <Form onSubmit={onPressSubmit}>
      <ScrollView>
        {currentAccount && (
          <CurrencyInput
            currency={currentAccount.currency}
            locale={currentAccount.locale}
            value={value}
            onSaveValue={setValue}
            label="Value"
          />
        )}
        <Spacer h={7} />
        <TextInput
          label="Nome"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Compras no mercado"
        />
        <Spacer h={7} />
        <Select
          value={accountId}
          onSelect={setAccountId}
          options={accountsOptions}
          label="Account"
        />
      </ScrollView>
    </Form>
  );
}
