import React, {Fragment} from 'react';
import {
  IconNames,
  NavigationHeader,
  NavigationLine,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Wrapper,
} from 'plutos-react-native-ui';
import {useNavigation} from '@react-navigation/native';

const menu: {
  title: string;
  items: {name: string; icon: IconNames; screen: string}[];
}[] = [
  {
    title: 'Options',
    items: [
      {name: 'Accounts', icon: 'Wallet', screen: 'Accounts'},
      {name: 'Categories', icon: 'Tag', screen: 'Categories'},
      {name: 'Transactions', icon: 'Coins', screen: ''},
      {name: 'Goals', icon: 'Goal', screen: ''},
      {name: 'Notifications', icon: 'Bell', screen: ''},
      {name: 'Reminders', icon: 'Clock', screen: ''},
    ],
  },
  {
    title: 'Legal',
    items: [
      {name: 'Terms of Service', icon: 'ScrollText', screen: ''},
      {name: 'Privacy Policy', icon: 'ScrollText', screen: ''},
    ],
  },
];

export function MenuScreen() {
  const navigation = useNavigation();

  return (
    <ScreenContainer withoutTopSpace header={<NavigationHeader title="Menu" />}>
      <Wrapper py={7}>
        {menu?.map(section => (
          <Fragment key={section.title}>
            <Spacer h={7} />
            <SectionHeader text={section.title} />
            <Spacer h={4} />
            {section.items.map(item => (
              <Wrapper key={item.name} px={3}>
                <NavigationLine
                  title={item.name}
                  onPress={() =>
                    navigation.navigate('CoreStack', {
                      screen: item.screen as any,
                    })
                  }
                  leadingIcon={item.icon}
                />
              </Wrapper>
            ))}
          </Fragment>
        ))}
        <Spacer h={7} />
        <NavigationLine title="Logout" />
        <Spacer h={7} />
      </Wrapper>
    </ScreenContainer>
  );
}
