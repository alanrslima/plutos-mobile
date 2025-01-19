import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types';

export const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      borderWidth: 1.25,
      borderColor: theme.colors.borderNeutral,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
  });
