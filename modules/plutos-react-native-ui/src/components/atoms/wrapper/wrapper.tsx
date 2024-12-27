import React, {ReactNode} from 'react';
import {SpaceProps} from '../../../types';
import {WrapperContainer} from './wrapper.styles';
import {StyleProp, ViewStyle} from 'react-native';

export type WrapperProps = {
  children: ReactNode;
  px?: keyof SpaceProps;
  py?: keyof SpaceProps;
  style?: StyleProp<ViewStyle>;
  flexDir?: 'column' | 'row';
  gap?: keyof SpaceProps;
};

export function Wrapper({
  children,
  px = 0,
  py = 0,
  flexDir = 'column',
  gap = 0,
}: WrapperProps) {
  return (
    <WrapperContainer $gap={gap} $px={px} $py={py} $flexDir={flexDir}>
      {children}
    </WrapperContainer>
  );
}
