import React, {useState} from 'react';
import {
  Button,
  CurrencyInput,
  NavigationHeader,
  ScreenContainer,
  Spacer,
  TextInput,
  Wrapper,
} from 'plutos-react-native-ui';

export function AccountFormScreen() {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader title="New account" />}>
      <Wrapper py={7} px={7}>
        <CurrencyInput />
        <Spacer h={5} />
        <TextInput label="Name" />
        <Spacer h={7} />
        <Button title="Save" full />
      </Wrapper>
    </ScreenContainer>
  );
}
