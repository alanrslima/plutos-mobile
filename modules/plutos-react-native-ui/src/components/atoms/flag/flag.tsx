import React from 'react';
import {Container} from './flag.styles';

export type FlagProps = {
  isoCode: string;
  size?: number;
};

export function Flag({isoCode, size = 34}: FlagProps) {
  return <Container isoCode={isoCode} size={size} />;
}
