import React, {Fragment} from 'react';
import {
  AccountItem,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';

export function AccountsScreen() {
  const accounts = [1, 2, 3, 4];

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader title="Accounts" />}>
      <Wrapper px={7} py={7}>
        <SectionHeader text="Accounts" />
        <Spacer h={5} />
        {accounts.map(account => (
          <Fragment key={account}>
            <AccountItem />
            <Spacer h={4} />
          </Fragment>
        ))}
      </Wrapper>
    </ScreenContainer>
  );
}
