import React, {ReactNode} from 'react';
import {Container} from './link.styles';
import {TypographyProps} from 'plutos-react-native-ui';

export type LinkProps = TypographyProps & {
  children: ReactNode;
  onPress?: () => void;
};

export function Link({children, onPress, ...rest}: LinkProps) {
  return (
    <Container onPress={onPress} {...rest}>
      {children}
    </Container>
  );
}
