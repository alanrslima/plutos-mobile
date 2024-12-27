import React from 'react';
import {ReactNode} from 'react';
import {TypographyText} from './typography.styles';
import {ColorProps} from '../../../types';

export type TypographyType =
  | 'caption'
  | 'overline'
  | 'body-default-bold'
  | 'body-default'
  | 'body-large-bold'
  | 'body-large'
  | 'title-group'
  | 'title-body'
  | 'title-subsection'
  | 'title-section'
  | 'title-screen'
  | 'display-small'
  | 'display-medium'
  | 'display-large';

export type TypographyProps = {
  children: ReactNode;
  type?: TypographyType;
  color?: keyof ColorProps;
  numberOfLines?: number;
};

export function Typography({
  type = 'body-default',
  color = 'onBackgroundPrimary',
  children,
  numberOfLines,
}: TypographyProps) {
  return (
    <TypographyText numberOfLines={numberOfLines} $color={color} $type={type}>
      {children}
    </TypographyText>
  );
}
