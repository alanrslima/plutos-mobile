import {
  AccountItem,
  Alert,
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
  const navigate = useNavigation();
  const {accounts} = useAccounts();
  const {width} = useDevice();

  function onPressViewAllAccounts() {
    // navigation.navigate('CoreStack', {screen: 'Accounts'});
  }

  if (!accounts.length) {
    return (
      <Wrapper py={7}>
        <EmptyState />
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
