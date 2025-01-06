import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {ThemeProps} from '../../../types';

export const Container = styled.Modal``;

export const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
