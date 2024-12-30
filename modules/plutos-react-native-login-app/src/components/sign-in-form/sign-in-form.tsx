import React, {useState} from 'react';
import {Button, SectionHeader, Spacer, TextInput} from 'plutos-react-native-ui';

export type SignInFormProps = {
  onSubmit(email: string, password: string): Promise<void>;
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
      <SectionHeader text="Login" />
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
      <Button title="Forgot password?" size="lg" variant="minimal" full />
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
