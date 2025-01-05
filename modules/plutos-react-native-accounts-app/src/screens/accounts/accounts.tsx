import React, {Fragment} from 'react';
import {
  AccountItem,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';
import {useAccounts} from '../../hooks/use-accounts';
import {AccountsMemoryService} from '../../services/accounts-memory-service';

const accountsService = new AccountsMemoryService([
  {balance: 2000.32, id: '1', name: 'Test'},
]);

export function AccountsScreen() {
  const {accounts} = useAccounts({accountsService});
  const navigation = useNavigation();

  function onPressAdd() {
    navigation.navigate('AccountsStack', {screen: 'AccountForm'});
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={
        <NavigationHeader
          title="Accounts"
          rightButtons={[{icon: 'Plus', onPress: onPressAdd}]}
        />
      }>
      <Wrapper px={7} py={7}>
        <SectionHeader text="Accounts" />
        <Spacer h={5} />
        {accounts.map(account => (
          <Fragment key={account.id}>
            <AccountItem
              balance={account.balance}
              currency="BRL"
              locale="PT-BR"
              name={account.name}
            />
            <Spacer h={4} />
          </Fragment>
        ))}
      </Wrapper>
    </ScreenContainer>
  );
}
