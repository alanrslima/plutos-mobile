import styled, {css} from 'styled-components/native';
import {IconButtonSizes, IconButtonVariants} from './icon-button';
import {DefaultTheme} from 'styled-components';
import {Icon} from '../icon/icon';
import {ColorProps} from '../../../types';

const containerSizeStyles = (size: IconButtonSizes) =>
  ({
    sm: css`
      width: 36px;
      height: 36px;
    `,
    md: css`
      width: 48px;
      height: 48px;
    `,
    lg: css`
      width: 56px;
      height: 56px;
    `,
  }[size]);

const variantsContainerStyles = (
  theme: DefaultTheme,
  variant: IconButtonVariants,
) =>
  ({
    primary: css`
      background-color: ${theme.colors.primary};
    `,
    secondary: css`
      background-color: ${theme.colors.secondary};
    `,
    tertiary: css`
      background-color: ${theme.colors.backgroundElevated};
    `,
    outline: css`
      background-color: ${theme.colors.secondary};
    `,
  }[variant]);

const variantsTextColor: {[key in IconButtonVariants]: keyof ColorProps} = {
  outline: 'blackA900',
  primary: 'secondary',
  secondary: 'onSecondaryPrimary',
  tertiary: 'blackA900',
};

export const IconButtonContainer = styled.TouchableOpacity<{
  $size: IconButtonSizes;
  $variant: IconButtonVariants;
}>`
  background-color: ${({theme}) => theme.colors.backgroundOverlay};
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.radii.round};

  ${({$size}) => containerSizeStyles($size)}
  ${({$variant, theme}) => variantsContainerStyles(theme, $variant)}
`;

export const IconButtonIcon = styled(Icon).attrs<{
  $variant: IconButtonVariants;
}>(({$variant}) => ({color: variantsTextColor[$variant]}))``;
