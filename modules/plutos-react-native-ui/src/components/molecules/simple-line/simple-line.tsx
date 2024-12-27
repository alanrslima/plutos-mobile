import React from 'react';
import {
  SimpleLineContainer,
  SimpleLineContent,
  SimpleLineDescription,
  SimpleLineLeadingIcon,
  SimpleLineLeftContent,
  SimpleLineRightContent,
  SimpleLineTitle,
  SimpleLineValue,
} from './simple-line.styles';
import {IconNames} from '../../atoms';

export type SimpleLineProps = {
  title: string;
  description?: string;
  value?: string;
  leadingIcon?: IconNames;
};

export function SimpleLine(props: SimpleLineProps) {
  return (
    <SimpleLineContainer>
      {props.leadingIcon && (
        <SimpleLineLeftContent>
          <SimpleLineLeadingIcon name={props.leadingIcon} />
        </SimpleLineLeftContent>
      )}

      <SimpleLineContent>
        <SimpleLineTitle>{props.title}</SimpleLineTitle>
        <SimpleLineDescription>{props.description}</SimpleLineDescription>
      </SimpleLineContent>
      <SimpleLineRightContent>
        <SimpleLineValue>{props.value}</SimpleLineValue>
      </SimpleLineRightContent>
    </SimpleLineContainer>
  );
}
