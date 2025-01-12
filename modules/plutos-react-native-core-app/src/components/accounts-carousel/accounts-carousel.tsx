import React from 'react';
import {
  AccountItem,
  Carousel,
  EmptyState,
  SectionHeader,
  Spacer,
  useDevice,
  Wrapper,
} from 'plutos-react-native-ui';
import {useAccounts} from '../../hooks/use-accounts';
import {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';

export function AccountsCarousel() {
  const navigation = useNavigation();
  const {accounts, openAccountForm} = useAccounts();
  const {width} = useDevice();

  function onPressViewAllAccounts() {
    navigation.navigate('CoreStack', {screen: 'Accounts'});
  }

  if (!accounts.length) {
    return (
      <Wrapper py={7}>
        <EmptyState
          title="Add an account"
          description=" Add accounts so you are ready to register yours transactions"
          actionButton={{
            title: 'Create account',
            leadingIcon: 'Plus',
            onPress: openAccountForm,
          }}
        />
      </Wrapper>
    );
  }

  if (accounts.length === 1) {
    return (
      <Wrapper py={7}>
        <SectionHeader
          text="Accounts"
          actionButton={{title: 'View all', onPress: onPressViewAllAccounts}}
        />
        <Spacer h={4} />
        <AccountItem
          balance={accounts[0].balance}
          currency={accounts[0].currency}
          locale={accounts[0].locale}
          isoCode={accounts[0].isoCode}
          currencyName={accounts[0].currencyName}
          name={accounts[0].name}
        />
      </Wrapper>
    );
  }

  return (
    <Fragment>
      <Wrapper py={7}>
        <SectionHeader
          text="Accounts"
          actionButton={{title: 'View all', onPress: onPressViewAllAccounts}}
        />
        <Spacer h={4} />
      </Wrapper>
      <Carousel
        data={accounts}
        renderItem={item => (
          <AccountItem
            balance={item.balance}
            currency={item.currency}
            locale={item.locale}
            isoCode={item.isoCode}
            currencyName={item.currencyName}
            name={item.name}
            width={width * 0.7}
          />
        )}
      />
    </Fragment>
  );
}
