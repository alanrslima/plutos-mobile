import React from 'react';
import {
  AccountItem,
  IconButton,
  NavigationLine,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';

export function HomeScreen() {
  const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <SectionHeader text="Accounts" />
        <Spacer h={4} />
        <AccountItem />
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
