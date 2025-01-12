import React from 'react';
import {
  NavigationHeaderContainer,
  NavigationHeaderContent,
  NavigationHeaderLeft,
  NavigationHeaderRight,
  NavigationHeaderTitle,
  NavigationHeaderWrapperTitle,
} from './navigation-header.styles';
import {useDevice} from '../../../hooks';
import {IconButton, IconButtonProps} from '../../atoms';

export type NavigationHeaderProps = {
  title?: string;
  rightButtons?: IconButtonProps[];
  useStatusBarHeight?: boolean;
  leftButtons?: IconButtonProps[];
};

export function NavigationHeader({
  useStatusBarHeight = true,
  title,
  rightButtons,
  leftButtons,
}: NavigationHeaderProps) {
  const {statusBarHeight} = useDevice();

  return (
    <NavigationHeaderContainer
      $statusBarHeight={useStatusBarHeight ? statusBarHeight : 0}>
      <NavigationHeaderContent>
        {title && (
          <NavigationHeaderWrapperTitle>
            <NavigationHeaderTitle>{title}</NavigationHeaderTitle>
          </NavigationHeaderWrapperTitle>
        )}

        <NavigationHeaderLeft>
          {leftButtons?.map(button => (
            <IconButton {...button} key={button.icon} />
          ))}
        </NavigationHeaderLeft>
        <NavigationHeaderRight>
          {rightButtons &&
            rightButtons.map(button => (
              <IconButton {...button} key={button.icon} />
            ))}
        </NavigationHeaderRight>
      </NavigationHeaderContent>
    </NavigationHeaderContainer>
  );
}
