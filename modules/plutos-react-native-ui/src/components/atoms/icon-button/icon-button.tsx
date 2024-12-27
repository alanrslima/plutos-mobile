import React from 'react';
import {IconNames} from '../icon/icon';
import {IconButtonContainer, IconButtonIcon} from './icon-button.styles';
import {TouchableOpacityProps} from 'react-native';

export type IconButtonSizes = 'sm' | 'md' | 'lg';

export type IconButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline';

export type IconButtonProps = TouchableOpacityProps & {
  icon: IconNames;
  size?: IconButtonSizes;
  variant?: IconButtonVariants;
};

export function IconButton({
  icon,
  size = 'md',
  variant = 'tertiary',
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonContainer $variant={variant} $size={size} {...rest}>
      <IconButtonIcon $variant={variant} name={icon} size={20} />
    </IconButtonContainer>
  );
}
