import React, {useState} from 'react';
import {Form, Spacer, TextInput} from 'plutos-react-native-ui';
import {ScrollView} from 'react-native';

export type TransactionFormProps = {
  onSubmit(data: {name: string}): Promise<void>;
};

export function TransactionForm(props: TransactionFormProps) {
  const [name, setName] = useState('');

  async function onPressSubmit() {
    await props.onSubmit({name});
  }

  return (
    <Form onSubmit={onPressSubmit}>
      <ScrollView>
        <TextInput
          label="Nome"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Compras no mercado"
        />
        <Spacer h={7} />
      </ScrollView>
    </Form>
  );
}
