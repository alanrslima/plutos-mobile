import React, {useState} from 'react';
import {
  Button,
  Link,
  SectionHeader,
  Spacer,
  TextInput,
  Typography,
} from 'plutos-react-native-ui';

export type SignUpFormProps = {
  onSubmit(name: string, email: string, password: string): Promise<void>;
  onPressSignIn: () => void;
};

export function SignUpForm(props: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onPressTermsAndConditions() {}

  function onPressPrivacyPolicy() {}

  async function onSubmit() {
    try {
      setIsLoading(true);
      await props.onSubmit(name, email, password);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <SectionHeader
        text="Sign up"
        description="Enter your details below to create your account and get started."
      />
      <Spacer h={5} />
      <TextInput
        textContentType="name"
        value={name}
        onChangeText={setName}
        label="Nome"
      />
      <Spacer h={5} />
      <TextInput
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        label="E-mail"
      />
      <Spacer h={5} />
      <TextInput
        label="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Must have at least +6 characters"
      />
      <Spacer h={7} />
      <Typography color="onBackgroundSecondary">
        By signin up, you're agree to our{' '}
        <Link onPress={onPressTermsAndConditions}>Terms & Conditions</Link> and{' '}
        <Link onPress={onPressPrivacyPolicy}>Privacy Policy</Link>
      </Typography>
      <Spacer h={7} />
      <Button
        title="Continue"
        isLoading={isLoading}
        onPress={onSubmit}
        size="lg"
        full
      />
      <Spacer h={5} />
      <Button
        title="Joined us before? Login"
        size="lg"
        onPress={props.onPressSignIn}
        variant="tertiary"
        full
      />
    </>
  );
}
