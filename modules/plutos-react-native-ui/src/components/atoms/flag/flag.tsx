import React from 'react';
import {Container} from './flag.styles';

export type FlagProps = {
  isoCode: string;
  size?: number;
  rounded?: boolean;
};

export function Flag({isoCode, rounded, size = 34}: FlagProps) {
  return <Container $rounded={rounded} isoCode={isoCode} size={size} />;
}
