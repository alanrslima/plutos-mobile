import React, {useState} from 'react';
import {
  AccountItemContainer,
  AccountItemCurrencyWrapper,
  AccountItemIcon,
  AccountItemLabel,
  AccountItemName,
  AccountItemRow,
  AccountItemTitle,
} from './account-item.styles';
import {View} from 'react-native';
import {formatCurrency} from 'plutos-react-native-commun';

export type AccountItemProps = {
  width?: number;
  balance: number;
  currency: string;
  locale: string;
  name: string;
};

export function AccountItem(props: AccountItemProps) {
  const [visible, setVisible] = useState(true);

  function toggleVisible() {
    setVisible(prevState => !prevState);
  }

  return (
    <AccountItemContainer $width={props.width}>
      <AccountItemCurrencyWrapper />
      <AccountItemRow>
        <View>
          <AccountItemLabel>Seu saldo</AccountItemLabel>
          <AccountItemTitle>
            {visible
              ? formatCurrency(props.balance, props.locale, props.currency)
              : '•••••••••'}
          </AccountItemTitle>
        </View>
        <AccountItemIcon
          onPress={toggleVisible}
          icon={visible ? 'Eye' : 'EyeClosed'}
        />
      </AccountItemRow>
      <AccountItemName>{props.name}</AccountItemName>
    </AccountItemContainer>
  );
}
