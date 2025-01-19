import {ThemeProps, Typography} from 'plutos-react-native-ui';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const CurrencyInputContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: ${({theme}) => theme.spaces[7]};
`;

export const CurrencyInputContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
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

export const InputLabel = styled(Typography).attrs({
  type: 'body-default-bold',
})``;

export const InputValue = styled(Typography).attrs({type: 'title-section'})``;

export const WrapperButton = styled.View`
  flex: 1;
`;

export const WrapperInput = styled.TouchableOpacity`
  gap: ${({theme}) => theme.spaces[2]};
`;

export const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.blackA600,
    },
    content: {
      backgroundColor: theme.colors.secondary,
      padding: 24,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
    },
    offset: {
      flex: 1,
    },
    wrapperValue: {
      paddingVertical: 24,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
