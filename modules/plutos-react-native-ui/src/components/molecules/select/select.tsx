import React, {useMemo, useState} from 'react';
import {Container, Content, Label, Value} from './select.types';
import {Spacer} from '../../atoms';
import {SelectModal} from './select-modal';

export type SelectOptionProps = {
  value: string;
  title: string;
  description?: string;
  leadingLabel?: string;
  leadingFlag?: string;
};

export type SelectProps = {
  options: SelectOptionProps[];
  value: string;
  label?: string;
  onSelect: (value: string) => void;
};

export function Select(props: SelectProps) {
  const [showModal, setShowModal] = useState(false);

  const selectedItem = useMemo(() => {
    return props.options.find(item => item.value === props.value);
  }, [props.value, props.options]);

  return (
    <Container onPress={() => setShowModal(true)}>
      <Label>{props.label}</Label>
      <Spacer h={2} />
      <Content>
        <Value>{selectedItem?.title}</Value>
      </Content>
      <SelectModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        options={props.options}
        onSelect={props.onSelect}
      />
    </Container>
  );
}
