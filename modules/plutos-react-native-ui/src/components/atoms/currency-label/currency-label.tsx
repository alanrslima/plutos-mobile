import React from 'react';
import {
  CurrencyLabelContainer,
  CurrencyLabelFlag,
  CurrencyLabelText,
} from './currency-label.styles';

export function CurrencyLabel() {
  return (
    <CurrencyLabelContainer>
      <CurrencyLabelFlag isoCode="br" size={24} />
      <CurrencyLabelText>US Dollar</CurrencyLabelText>
    </CurrencyLabelContainer>
  );
}
