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
import {NavigationProp, NavigationState} from '@react-navigation/native';

export type NavigationHeaderProps = {
  title?: string;
  rightButtons?: IconButtonProps[];
  navigation?: Omit<
    NavigationProp<ReactNavigation.RootParamList>,
    'getState'
  > & {
    getState(): NavigationState | undefined;
  };
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
          {props.navigation?.canGoBack() && <IconButton onPress={props.navigation.goBack} icon="ChevronLeft" />}
        </NavigationHeaderLeft>
        <NavigationHeaderRight>
          {props.rightButtons &&
            props.rightButtons.map(button => (
              <IconButton {...button} key={button.icon} />
            ))}
        </NavigationHeaderRight>
      </NavigationHeaderContent>
    </NavigationHeaderContainer>
  );
}
