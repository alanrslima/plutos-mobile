import React, {useState} from 'react';
import {
  AccountItemContainer,
  AccountItemIcon,
  AccountItemLabel,
  AccountItemName,
  AccountItemRow,
  AccountItemTitle,
} from './account-item.styles';
import {View} from 'react-native';
import {formatCurrency} from 'plutos-react-native-commun';
import {CurrencyLabel, IconButton} from '../../atoms';

export type AccountItemProps = {
  width?: number;
  balance: number;
  currency: string;
  isoCode?: string;
  locale: string;
  currencyName?: string;
  name: string;
};

export function AccountItem(props: AccountItemProps) {
  const [visible, setVisible] = useState(true);

  function toggleVisible() {
    setVisible(prevState => !prevState);
  }

  return (
    <AccountItemContainer $width={props.width}>
      {props.isoCode && (
        <CurrencyLabel
          size={24}
          label={props.currencyName}
          isoCode={props.isoCode}
        />
      )}
      <AccountItemRow>
        <View>
          <AccountItemLabel>Seu saldo</AccountItemLabel>
          <AccountItemTitle>
            {visible
              ? formatCurrency(props.balance, props.locale, props.currency)
              : '•••••••••'}
          </AccountItemTitle>
        </View>
        <IconButton
          variant="outline"
          onPress={toggleVisible}
          icon={visible ? 'Eye' : 'EyeClosed'}
        />
      </AccountItemRow>
      <AccountItemName>{props.name}</AccountItemName>
    </AccountItemContainer>
  );
}
