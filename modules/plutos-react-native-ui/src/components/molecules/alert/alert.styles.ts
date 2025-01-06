import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types';

export const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundElevated,
      padding: 24,
      borderRadius: 12,
      gap: 8,
    },
  });
