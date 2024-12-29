import React from 'react';
import {
  CardButtonContainer,
  CardButtonIcon,
  CardButtonText,
} from './card-button.styles';
import {IconNames} from '../icon/icon';
import {TouchableOpacityProps} from 'react-native';

export type CardButtonProps = TouchableOpacityProps & {
  title: string;
  icon: IconNames;
};

export function CardButton({icon, title, ...rest}: CardButtonProps) {
  return (
    <CardButtonContainer {...rest}>
      <CardButtonIcon name={icon} />
      <CardButtonText>{title}</CardButtonText>
    </CardButtonContainer>
  );
}
