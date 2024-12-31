import React, {Fragment} from 'react';
import {
  AccountItem,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';
import { useNavigation } from '@react-navigation/native';

export function AccountsScreen() {
  const accounts = [1, 2, 3, 4];
  const navigation =useNavigation()

  function onPressAdd() {
    navigation.navigate("AccountsStack", { screen: 'AccountForm'})
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader title="Accounts" rightButtons={[{ icon: 'Plus', onPress: onPressAdd}]} />}>
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
