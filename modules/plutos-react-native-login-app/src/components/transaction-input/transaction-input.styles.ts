import {Typography} from 'plutos-react-native-ui';
import styled from 'styled-components/native';

export const TransactionInputContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: ${({theme}) => theme.spaces[7]};
`;

export const TransactionInputContent = styled.View`
  flex: 1;
`;

export const TransactionInputValue = styled(Typography).attrs({
  type: 'display-medium',
  color: 'onSecondaryPrimary',
})``;

export const TransactionInputKeyboard = styled.View`
  gap: ${({theme}) => theme.spaces[2]};
  padding: ${({theme}) => theme.spaces[5]} 0px;
`;

export const TransactionInputKeyboardRow = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spaces[2]};
`;

export const TransactionInputKeyboardButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({theme}) => theme.colors.whiteA100};
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spaces[4]} 0px;
  border-radius: ${({theme}) => theme.radii.lg};
`;

export const TransactionInputKeyboardButtonText = styled(Typography).attrs({
  color: 'onSecondaryPrimary',
  type: 'title-section',
})``;
