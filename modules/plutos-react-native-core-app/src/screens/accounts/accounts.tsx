import React, {Fragment} from 'react';
import {
  AccountItem,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useAccounts} from '../../hooks/use-accounts';

export function AccountsScreen() {
  const {accounts, openAccountForm} = useAccounts();

  return (
    <ScreenContainer
      withoutTopSpace
      header={
        <NavigationHeader
          title="Accounts"
          rightButtons={[{icon: 'Plus', onPress: openAccountForm}]}
        />
      }>
      <Wrapper px={7} py={7}>
        <SectionHeader text="Accounts" />
        <Spacer h={5} />
        {accounts.map(account => (
          <Fragment key={account.id}>
            <AccountItem
              isoCode={account.isoCode}
              balance={account.balance}
              currency={account.currency}
              locale={account.locale}
              name={account.name}
              currencyName={account.currencyName}
            />
            <Spacer h={4} />
          </Fragment>
        ))}
      </Wrapper>
    </ScreenContainer>
  );
}
