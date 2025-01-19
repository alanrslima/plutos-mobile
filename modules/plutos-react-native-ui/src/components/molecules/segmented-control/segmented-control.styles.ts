import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types';

export const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    wrapper: {
      gap: 8,
    },
    container: {
      borderRadius: 12,
      padding: 4,
      flexDirection: 'row',
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.borderNeutral,
    },
    button: {
      flex: 1,
      borderRadius: 12,
      paddingVertical: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSelected: {
      backgroundColor: theme.colors.interactiveSecondary,
      borderWidth: 2,
      borderColor: theme.colors.interactivePrimary,
    },
  });
