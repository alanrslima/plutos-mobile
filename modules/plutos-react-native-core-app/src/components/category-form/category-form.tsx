import React, {useState} from 'react';
import {Form, TextInput} from 'plutos-react-native-ui';
import {ScrollView} from 'react-native';

export type CategoryFormProps = {
  onSubmit(data: {name: string}): Promise<void>;
};

export function CategoryForm(props: CategoryFormProps) {
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
          placeholder="Ex: Supermercado"
        />
      </ScrollView>
    </Form>
  );
}
