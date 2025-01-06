import React, {useMemo, useState} from 'react';
import {
  Button,
  CurrencyInput,
  NavigationHeader,
  ScreenContainer,
  Spacer,
  TextInput,
  Wrapper,
  Select,
  SelectOptionProps,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';
import {currencyList} from 'plutos-react-native-commun';
import {useAccounts} from '../../hooks/use-accounts';

const currencyOptions: SelectOptionProps[] = currencyList.map(item => ({
  value: item.currency,
  title: item.name,
  description: `${item.country} • ${item.currency}`,
  leadingFlag: item.isoCode,
}));

export function AccountFormScreen() {
  const {create} = useAccounts();
  const navigation = useNavigation();
  const [initialBalance, setInitialBalance] = useState('0');
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState(currencyOptions[0].value);

  const currencyItem = useMemo(() => {
    return currencyList.find(item => item.currency === currency);
  }, [currency]);

  async function onSubmit() {
    await create({
      currency,
      initialBalance: Number(initialBalance),
      locale: currencyItem?.locale!,
      name,
    });
    navigation.goBack();
  }

  return (
    <ScreenContainer
      withoutTopSpace
      footer={
        <Wrapper px={7} py={7}>
          <Button onPress={onSubmit} size="lg" title="Save" full />
        </Wrapper>
      }
      header={<NavigationHeader navigation={navigation} title="New account" />}>
      <Wrapper py={7} px={7}>
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
        <Spacer h={7} />
      </Wrapper>
    </ScreenContainer>
  );
}
