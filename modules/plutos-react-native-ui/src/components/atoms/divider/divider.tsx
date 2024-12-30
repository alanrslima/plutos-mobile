import React from 'react';
import {DividerContainer, Label, PartialLine, Wrapper} from './divider.styles';

export type DividerProps = {
  label?: string;
};

export function Divider(props: DividerProps) {
  if (props.label) {
    return (
      <Wrapper>
        <PartialLine />
        <Label>{props.label}</Label>
        <PartialLine />
      </Wrapper>
    );
  }

  return <DividerContainer />;
}
