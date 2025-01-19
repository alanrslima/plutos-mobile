import {Animated, Platform} from 'react-native';
import styled from 'styled-components/native';
import {Typography} from '../typography/typography';

export const TextInputContainer = styled.View``;

export const TextInputLabel = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const TextInputInput = styled.TextInput<{$isFocused: boolean}>`
  border-width: 1.25px;
  border-color: ${({theme, $isFocused}) =>
    $isFocused ? theme.colors.onBackgroundPrimary : theme.colors.borderNeutral};
  padding: ${({theme}) => theme.sizes[4]} ${({theme}) => theme.sizes[5]};
  font-family: ${Platform.OS === 'android'
    ? 'Poppins-Medium'
    : 'Poppins Medium'};
  border-radius: ${({theme}) => theme.radii.md};
  color: ${({theme}) => theme.colors.onSurfacePrimary};
  font-size: ${({theme}) => theme.fontSizes.text_md};
`;

export const TextInputClose = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.surface};
  flex-direction: row;
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.borderNeutral};
  justify-content: flex-end;
  padding: ${({theme}) => theme.spaces[3]} ${({theme}) => theme.spaces[7]};
`;
