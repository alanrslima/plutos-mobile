import React from 'react';
import {
  SimpleLineContainer,
  SimpleLineContent,
  SimpleLineDescription,
  SimpleLineLeadingFlag,
  SimpleLineLeadingIcon,
  SimpleLineLeadingLabel,
  SimpleLineLeftContent,
  SimpleLineRightContent,
  SimpleLineTitle,
  SimpleLineValue,
} from './simple-line.styles';
import {IconNames} from '../../atoms';
import {TouchableOpacityProps} from 'react-native';

export type SimpleLineProps = TouchableOpacityProps & {
  title: string;
  description?: string;
  value?: string;
  leadingIcon?: IconNames;
  leadingLabel?: string;
  leadingFlag?: string;
};

export function SimpleLine({
  title,
  description,
  value,
  leadingIcon,
  leadingLabel,
  leadingFlag,
  ...rest
}: SimpleLineProps) {
  return (
    <SimpleLineContainer {...rest}>
      {leadingIcon && (
        <SimpleLineLeftContent>
          <SimpleLineLeadingIcon name={leadingIcon} />
        </SimpleLineLeftContent>
      )}

      {leadingLabel && (
        <SimpleLineLeftContent>
          <SimpleLineLeadingLabel>{leadingLabel}</SimpleLineLeadingLabel>
        </SimpleLineLeftContent>
      )}

      {leadingFlag && (
        <SimpleLineLeftContent>
          <SimpleLineLeadingFlag isoCode={leadingFlag} />
        </SimpleLineLeftContent>
      )}

      <SimpleLineContent>
        <SimpleLineTitle>{title}</SimpleLineTitle>
        <SimpleLineDescription>{description}</SimpleLineDescription>
      </SimpleLineContent>
      <SimpleLineRightContent>
        <SimpleLineValue>{value}</SimpleLineValue>
      </SimpleLineRightContent>
    </SimpleLineContainer>
  );
}
