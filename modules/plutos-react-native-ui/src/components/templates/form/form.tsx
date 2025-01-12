import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Spacer} from '../../atoms';

export type FormProps = {
  children: React.ReactNode;
  onSubmit(): Promise<void>;
};

export function Form(props: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit() {
    try {
      setIsLoading(true);
      await props.onSubmit();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View>
      {props.children}
      <Spacer h={7} />
      <Button isLoading={isLoading} onPress={onSubmit} full title="Salvar" />
    </View>
  );
}
