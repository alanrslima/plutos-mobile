import React, {useState} from 'react';
import {Button, SectionHeader, Spacer, TextInput} from 'plutos-react-native-ui';
import {WrapperForgotButton} from './sign-in-form.styles';

export type SignInFormProps = {
  onSubmit(email: string, password: string): Promise<void>;
  onPressForgotPassword: () => void;
};

export function SignInForm(props: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    try {
      setIsLoading(true);
      await props.onSubmit(email, password);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SectionHeader
        text="Login"
        description="Hello, welcome back to our account"
      />
      <Spacer h={5} />
      <TextInput
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        label="E-mail"
      />
      <Spacer h={5} />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <WrapperForgotButton>
        <Button
          title="Forgot password?"
          onPress={props.onPressForgotPassword}
          size="lg"
          variant="minimal"
          full
        />
      </WrapperForgotButton>
      <Spacer h={7} />
      <Button
        title="Login"
        isLoading={isLoading}
        onPress={onSubmit}
        size="lg"
        full
      />
    </>
  );
}
