import {AccountsScreen} from './screens/accounts/accounts';
import {AccountFormScreen} from './screens/account-form/account-form';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/home/home';

export const CoreAppStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Accounts: AccountsScreen,
    AccountForm: AccountFormScreen,
  },
  screenOptions: {headerShown: false},
});

export * from './contexts';
