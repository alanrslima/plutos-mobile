import React from 'react';
import {
  Content,
  SectionHeaderButton,
  SectionHeaderContainer,
  SectionHeaderDescription,
  SectionHeaderText,
} from './section-header.styles';
import {ButtonProps} from '../button/button';

export type SectionHeaderProps = {
  text: string;
  description?: string;
  actionButton?: ButtonProps;
};

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      <Content>
        <SectionHeaderText>{props.text}</SectionHeaderText>
        {props.description && (
          <SectionHeaderDescription>
            {props.description}
          </SectionHeaderDescription>
        )}
      </Content>

      {props.actionButton && <SectionHeaderButton {...props.actionButton} />}
    </SectionHeaderContainer>
  );
}
