import React, {ReactNode} from 'react';
import {
  NavigationHeaderContainer,
  NavigationHeaderContent,
  NavigationHeaderLeft,
  NavigationHeaderRight,
  NavigationHeaderTitle,
  NavigationHeaderWrapperTitle,
} from './navigation-header.styles';
import {useDevice} from '../../../hooks';
import {IconButton} from '../../atoms';

export type NavigationHeaderProps = {
  title?: string;
  rightContent?: ReactNode;
};

export function NavigationHeader(props: NavigationHeaderProps) {
  const {statusBarHeight} = useDevice();

  return (
    <NavigationHeaderContainer $statusBarHeight={statusBarHeight}>
      <NavigationHeaderContent>
        <NavigationHeaderWrapperTitle>
          <NavigationHeaderTitle>{props.title}</NavigationHeaderTitle>
        </NavigationHeaderWrapperTitle>
        <NavigationHeaderLeft>
          <IconButton icon="ChevronLeft" />
        </NavigationHeaderLeft>
        <NavigationHeaderRight>
          <IconButton icon="ChevronLeft" />
        </NavigationHeaderRight>
      </NavigationHeaderContent>
    </NavigationHeaderContainer>
  );
}
