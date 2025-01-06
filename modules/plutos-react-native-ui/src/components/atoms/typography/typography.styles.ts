import {Platform} from 'react-native';
import styled, {css, DefaultTheme} from 'styled-components/native';
import {TypographyType} from './typography';
import {ColorProps} from '../../../types';

const textTypeStyles = (theme: DefaultTheme, type: TypographyType) =>
  ({
    caption: css`
      font-size: 12px;
      line-height: 20px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    overline: css`
      font-size: 10px;
      line-height: 18px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Regular'
        : 'Poppins Regular'};
    `,
    'body-default-bold': css`
      font-size: 14px;
      line-height: 22px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'body-default': css`
      font-size: 14px;
      line-height: 22px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Regular'
        : 'Poppins Regular'};
    `,
    'body-large-bold': css`
      font-size: 16px;
      line-height: 24px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'body-large': css`
      font-size: 16px;
      line-height: 24px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Regular'
        : 'Poppins Regular'};
    `,
    'title-group': css`
      font-size: 14px;
      line-height: 20px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'title-body': css`
      font-size: 18px;
      line-height: 24px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'title-subsection': css`
      font-size: 22px;
      line-height: 28px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'title-section': css`
      font-size: 26px;
      line-height: 32px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'title-screen': css`
      font-size: 30px;
      line-height: 34px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-SemiBold'
        : 'Poppins SemiBold'};
    `,
    'display-small': css`
      font-size: 40px;
      line-height: 120px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Bold'
        : 'Poppins Bold'};
    `,
    'display-medium': css`
      font-size: 64px;
      line-height: 82px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Bold'
        : 'Poppins Bold'};
    `,
    'display-large': css`
      font-size: 96px;
      line-height: 120px;
      font-family: ${Platform.OS === 'android'
        ? 'Poppins-Bold'
        : 'Poppins Bold'};
    `,
  }[type]);

export const TypographyText = styled.Text<{
  $type: TypographyType;
  $color: keyof ColorProps;
}>`
  color: ${({$color, theme}) => theme.colors[$color]};

  ${({theme, $type}) => textTypeStyles(theme, $type)}
`;
