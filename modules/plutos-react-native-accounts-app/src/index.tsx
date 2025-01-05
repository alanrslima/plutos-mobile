import {AccountsScreen} from './screens/accounts/accounts';
import {AccountFormScreen} from './screens/account-form/account-form';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const AccountsAppStack = createNativeStackNavigator({
  screens: {
    Accounts: AccountsScreen,
    AccountForm: AccountFormScreen,
  },
  screenOptions: {headerShown: false},
});

export * from './contexts';
