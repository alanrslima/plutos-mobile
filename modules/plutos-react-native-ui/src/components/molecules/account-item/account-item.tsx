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

export type AccountItemProps = {
  width?: number;
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
            {visible ? '$40.500,80' : '•••••••••'}
          </AccountItemTitle>
        </View>
        <AccountItemIcon
          onPress={toggleVisible}
          icon={visible ? 'Eye' : 'EyeClosed'}
        />
      </AccountItemRow>
      <AccountItemName>Nome da conta</AccountItemName>
    </AccountItemContainer>
  );
}
