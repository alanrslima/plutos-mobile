import React from 'react';
import {AccountsScreen} from './screens/accounts/accounts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/home/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MenuScreen} from './screens/menu/menu';
import {CategoriesScreen} from './screens/categories/categories';
import {Icon} from 'plutos-react-native-ui';

export const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Accounts: AccountsScreen,
    Menu: MenuScreen,
  },

  screenOptions: {headerShown: false, tabBarIcon: () => <Icon name="House" />},
});

export const CoreAppRouter = createNativeStackNavigator({
  screens: {
    Home: HomeTabs,
    Categories: CategoriesScreen,
    Accounts: AccountsScreen,
  },
  screenOptions: {headerShown: false},
});

export * from './contexts';
