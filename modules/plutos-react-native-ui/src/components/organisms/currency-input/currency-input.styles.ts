import {Typography} from 'plutos-react-native-ui';
import styled from 'styled-components/native';

export const CurrencyInputContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: ${({theme}) => theme.spaces[7]};
`;

export const CurrencyInputContent = styled.View`
  flex: 1;
`;

export const CurrencyInputValue = styled(Typography).attrs({
  type: 'display-medium',
  color: 'onSecondaryPrimary',
})``;

export const CurrencyInputKeyboard = styled.View`
  gap: ${({theme}) => theme.spaces[2]};
  padding: ${({theme}) => theme.spaces[5]} 0px;
`;

export const CurrencyInputKeyboardRow = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spaces[2]};
`;

export const CurrencyInputKeyboardButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({theme}) => theme.colors.whiteA100};
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces[4]} 0px;
  border-radius: ${({theme}) => theme.radii.lg};
`;

export const CurrencyInputKeyboardButtonText = styled(Typography).attrs({
  color: 'onSecondaryPrimary',
  type: 'title-section',
})``;

export const InputLabel = styled(Typography)``;

export const InputValue = styled(Typography).attrs({type: 'title-section'})``;

export const WrapperButton = styled.View`
  flex: 1;
`;
