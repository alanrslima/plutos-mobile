import React from 'react';
import {
  ButtonContainer,
  ButtonIcon,
  ButtonText,
  Spinner,
} from './button.styles';
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
  trailingIcon?: IconNames;
  isLoading?: boolean;
};

export function Button({
  size = 'md',
  variant = 'primary',
  title,
  full,
  fit,
  leadingIcon,
  trailingIcon,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
      disabled={isLoading || disabled}
      $full={full}
      $fit={fit}
      $variant={variant}
      $size={size}>
      {leadingIcon && <ButtonIcon $variant={variant} name={leadingIcon} />}
      {isLoading ? (
        <Spinner $variant={variant} />
      ) : (
        <ButtonText $variant={variant}>{title}</ButtonText>
      )}
      {trailingIcon && <ButtonIcon $variant={variant} name={trailingIcon} />}
    </ButtonContainer>
  );
}
