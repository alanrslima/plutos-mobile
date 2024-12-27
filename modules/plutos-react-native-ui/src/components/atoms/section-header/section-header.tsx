import React from 'react';
import {
  SectionHeaderButton,
  SectionHeaderContainer,
  SectionHeaderText,
} from './section-header.styles';
import {ButtonProps} from '../button/button';

export type SectionHeaderProps = {
  text: string;
  actionButton?: ButtonProps;
};

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      <SectionHeaderText>{props.text}</SectionHeaderText>
      {props.actionButton && <SectionHeaderButton {...props.actionButton} />}
    </SectionHeaderContainer>
  );
}
