import React from 'react';
import {ButtonContainer, ButtonLeadingIcon, ButtonText} from './button.styles';
import {TouchableOpacityProps} from 'react-native';
import {IconNames} from '../icon/icon';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'minimal';

export type ButtonProps = TouchableOpacityProps & {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  title: string;
  fit?: boolean;
  full?: boolean;
  leadingIcon?: IconNames;
};

export function Button({
  size = 'md',
  variant = 'primary',
  title,
  full,
  fit,
  leadingIcon,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
      $full={full}
      $fit={fit}
      $variant={variant}
      $size={size}>
      {leadingIcon && <ButtonLeadingIcon name={leadingIcon} />}
      <ButtonText $variant={variant}>{title}</ButtonText>
    </ButtonContainer>
  );
}
