import React from 'react';
import {
  Button,
  CurrencyInput,
  NavigationHeader,
  ScreenContainer,
  TextInput,
  Wrapper,
} from 'plutos-react-native-ui';

export function AccountFormScreen() {
  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader title="New account" />}>
      <Wrapper py={7} px={7}>
        <CurrencyInput />
        <TextInput label="Name" />
        <Button title="Save" full />
      </Wrapper>
    </ScreenContainer>
  );
}
