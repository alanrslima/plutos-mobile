import React, {useMemo, useState} from 'react';
import {
  CurrencyInput,
  DatePicker,
  Form,
  SegmentedControl,
  Select,
  SelectOptionProps,
  Spacer,
  TextInput,
  useStyles,
} from 'plutos-react-native-ui';
import {ScrollView, View} from 'react-native';
import {useAccounts} from '../../hooks/use-accounts';
import {TransactionCreate} from '../../types/transactions';
import {useCategories} from '../../hooks/use-categories';
import {createStyles} from './transaction-form.styles';

export type TransactionFormProps = {
  onSubmit(data: TransactionCreate): Promise<void>;
};

export function TransactionForm(props: TransactionFormProps) {
  const {accounts} = useAccounts();
  const {categories} = useCategories();
  const [transactionType, setTransactionType] = useState('1');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState(
    accounts.length ? accounts[0].id : '',
  );
  const [categoryId, setCategoryId] = useState('');

  const currentAccount = useMemo(() => {
    return accounts.find(account => account.id === accountId);
  }, [accountId, accounts]);

  const accountsOptions = useMemo(() => {
    return accounts.map(account => ({
      title: account.name,
      value: account.id,
      description: account.currencyName,
      leadingLabel: account.name.substring(0, 1),
    })) as SelectOptionProps[];
  }, [accounts]);

  const categoriesOptions = useMemo(() => {
    return categories.map(account => ({
      title: account.name,
      value: account.id,
      leadingIcon: 'Tag',
    })) as SelectOptionProps[];
  }, [categories]);

  async function onPressSubmit() {
    await props.onSubmit({
      accountId,
      name,
      value: Number(value),
      date: new Date(),
    });
  }

  const styles = useStyles(createStyles);

  return (
    <Form onSubmit={onPressSubmit}>
      <ScrollView>
        <SegmentedControl
          label="Type of transaction"
          onChangeValue={setTransactionType}
          items={[
            {title: 'Gasto', value: '1'},
            {title: 'Ganho', value: '2'},
          ]}
          value={transactionType}
        />
        {currentAccount && (
          <>
            <Spacer h={7} />
            <CurrencyInput
              currency={currentAccount.currency}
              locale={currentAccount.locale}
              value={value}
              onSaveValue={setValue}
              label="Value"
            />
          </>
        )}
        <Spacer h={7} />
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Compras no mercado"
        />
        <Spacer h={7} />
        <DatePicker />
        <Spacer h={7} />

        <View style={styles.row}>
          <Select
            value={accountId}
            onSelect={setAccountId}
            options={accountsOptions}
            label="Account"
          />
          <Select
            value={categoryId}
            onSelect={setCategoryId}
            options={categoriesOptions}
            label="Category"
          />
        </View>
      </ScrollView>
    </Form>
  );
}
