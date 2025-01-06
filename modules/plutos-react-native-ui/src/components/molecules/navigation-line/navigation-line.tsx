import React from 'react';
import {
  NavigationLineContainer,
  NavigationLineContent,
  NavigationLineDescription,
  NavigationLineLeftContent,
  NavigationLineOverline,
  NavigationLineRightContent,
  NavigationLineTitle,
  NavigationLineValue,
} from './navigation-line.styles';
import {Icon, IconNames} from '../../atoms';
import {Avatar, AvatarProps} from '../../atoms/avatar/avatar';

export type NavigationLineProps = {
  overline?: string;
  title: string;
  description?: string;
  value?: string;
  leadingIcon?: IconNames;
  avatar?: AvatarProps;
};

export function NavigationLine(props: NavigationLineProps) {
  return (
    <NavigationLineContainer>
      {props.leadingIcon && (
        <NavigationLineLeftContent>
          <Icon color="onBackgroundPrimary" name={props.leadingIcon} />
        </NavigationLineLeftContent>
      )}
      {props.avatar && <Avatar {...props.avatar} />}
      <NavigationLineContent>
        {props.overline && (
          <NavigationLineOverline>{props.overline}</NavigationLineOverline>
        )}

        <NavigationLineTitle>{props.title}</NavigationLineTitle>
        {props.description && (
          <NavigationLineDescription>
            {props.description}
          </NavigationLineDescription>
        )}
      </NavigationLineContent>
      {props.value && (
        <NavigationLineRightContent>
          <NavigationLineValue>{props.value}</NavigationLineValue>
        </NavigationLineRightContent>
      )}
    </NavigationLineContainer>
  );
}
