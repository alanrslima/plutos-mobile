import React from 'react';
import {CardButtonContainer, CardButtonText} from './card-button.styles';
import {Icon, IconNames} from '../icon/icon';
import {TouchableOpacityProps} from 'react-native';

export type CardButtonProps = TouchableOpacityProps & {
  title: string;
  icon: IconNames;
};

export function CardButton({icon, title, ...rest}: CardButtonProps) {
  return (
    <CardButtonContainer {...rest}>
      <Icon color="onSurfacePrimary" name={icon} />
      <CardButtonText>{title}</CardButtonText>
    </CardButtonContainer>
  );
}
