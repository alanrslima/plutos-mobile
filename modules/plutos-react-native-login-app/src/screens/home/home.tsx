import React, {useState} from 'react';
import {
  AccountItem,
  CardButton,
  Carousel,
  DeviceProps,
  IconButton,
  NavigationLine,
  ScreenContainer,
  SectionHeader,
  Spacer,
  ThemeProps,
  Wrapper,
} from 'plutos-react-native-ui';
import {useDevice} from 'plutos-react-native-ui';
import {StyleSheet} from 'react-native';

export function HomeScreen() {
  const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showTransactionInput, setShowTransactionInput] = useState(false);

  const {width} = useDevice();

  function openTransactionInput() {
    setShowTransactionInput(true);
  }

  function closeTransactionInput() {
    setShowTransactionInput(false);
  }

  return (
    <ScreenContainer type="scroll">
      <Wrapper py={7}>
        <Wrapper flexDir="row">
          <NavigationLine
            overline="Welcome back,"
            title="Sarah Muller"
            avatar={{
              source: {
                uri: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            }}
          />
          <IconButton icon="Bell" />
        </Wrapper>

        <Spacer h={7} />
        <SectionHeader text="Accounts" actionButton={{title: 'View all'}} />
        <Spacer h={4} />
      </Wrapper>
      <Carousel
        data={[1, 2, 3]}
        renderItem={() => (
          <AccountItem
            balance={200}
            currency="USD"
            locale="br-PT"
            name="Nome"
            width={width * 0.7}
          />
        )}
      />
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
        {transactions?.map(item => (
          <Wrapper key={item} px={2}>
            <NavigationLine
              title="Spotify"
              description="11 minutes ago"
              value="-$20"
              leadingIcon="ShoppingBag"
            />
          </Wrapper>
        ))}
      </Wrapper>
    </ScreenContainer>
  );
}
