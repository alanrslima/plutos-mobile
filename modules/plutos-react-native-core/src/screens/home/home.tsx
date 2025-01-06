import React, {useState} from 'react';
import {
  AccountItem,
  CardButton,
  Carousel,
  IconButton,
  NavigationLine,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useDevice} from 'plutos-react-native-ui';
import {useAccounts} from '../../hooks/use-accounts';
import {useNavigation} from '@react-navigation/native';
import {useTransactions} from '../../hooks/use-transactions';
import {formatCurrency} from 'plutos-react-native-commun';
import {useAuth} from 'plutos-react-native-login-app';
import {AccountsCarousel} from '../../components/accounts-carousel/accounts-carousel';

export function HomeScreen() {
  const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigation = useNavigation();
  const {accounts} = useAccounts();
  const {session} = useAuth();
  const {lastTransactions} = useTransactions();

  const [showTransactionInput, setShowTransactionInput] = useState(false);

  const {width} = useDevice();

  function openTransactionInput() {
    setShowTransactionInput(true);
  }

  function closeTransactionInput() {
    setShowTransactionInput(false);
  }

  function onPressViewAllAccounts() {
    navigation.navigate('CoreStack', {screen: 'Accounts'});
  }

  return (
    <ScreenContainer type="scroll">
      <Wrapper py={7}>
        <Wrapper flexDir="row">
          <NavigationLine
            overline="Welcome back,"
            title={session?.user.name}
            avatar={{
              source: {
                uri: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            }}
          />
          <IconButton icon="Bell" />
        </Wrapper>
        <Spacer h={7} />
      </Wrapper>
      <AccountsCarousel />
      <Spacer h={5} />
      <Wrapper py={7} gap={3} flexDir="row">
        <CardButton
          onPress={openTransactionInput}
          title="Gasto"
          icon="TrendingDown"
        />
        <CardButton title="Ganho" icon="TrendingUp" />
        <CardButton title="Transferência" icon="ArrowLeftRight" />
      </Wrapper>

      <Wrapper py={7}>
        <Spacer h={7} />
        <SectionHeader
          text="Transactions"
          actionButton={{title: 'View all', onPress: () => {}}}
        />

        <Spacer h={4} />
        {lastTransactions?.map(item => (
          <Wrapper key={item.id} px={3}>
            <NavigationLine
              title={item.name}
              description={item.account.name}
              value={formatCurrency(
                item.value,
                item.account.locale,
                item.account.currency,
              )}
              leadingIcon="ShoppingBag"
            />
          </Wrapper>
        ))}
      </Wrapper>
    </ScreenContainer>
  );
}
