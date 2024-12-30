import React, {ReactNode} from 'react';
import {Container} from './link.styles';

export type LinkProps = {
  children: ReactNode;
  onPress?: () => void;
};

export function Link({children, onPress}: LinkProps) {
  return <Container onPress={onPress}>{children}</Container>;
}
