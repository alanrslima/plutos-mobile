import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  Spacer,
  TextInput,
  Wrapper,
} from 'plutos-react-native-ui';

export function ForgotPasswordScreen() {
  const navigation = useNavigation();

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader navigation={navigation} />}>
      <Wrapper px={7} py={7}>
        <SectionHeader
          text="Forgot password?"
          description="Dont worry! It happens. Please enter the email associated with your account."
        />
        <Spacer h={5} />
        <TextInput label="E-mail" keyboardType="email-address" />
        <Spacer h={7} />
        <Button title="Submit" full />
      </Wrapper>
    </ScreenContainer>
  );
}
