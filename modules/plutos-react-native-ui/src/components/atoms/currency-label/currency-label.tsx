import React from 'react';
import {
  CurrencyLabelContainer,
  CurrencyLabelText,
} from './currency-label.styles';
import {Flag} from '../flag/flag';

export type CurrencyLabelProps = {
  isoCode: string;
  size?: number;
  label?: string;
};

export function CurrencyLabel(props: CurrencyLabelProps) {
  return (
    <CurrencyLabelContainer>
      <Flag isoCode={props.isoCode} size={props.size} />
      <CurrencyLabelText>{props.label}</CurrencyLabelText>
    </CurrencyLabelContainer>
  );
}
