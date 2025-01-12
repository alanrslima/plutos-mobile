import React from 'react';
import {
  Modal as RNModal,
  ModalProps as RNModalProps,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationHeader, NavigationHeaderProps} from '../../molecules';
import {ThemeProps} from '../../../types';
import {useStyles} from '../../../hooks';

export type ModalProps = RNModalProps & {
  navigationHeader?: NavigationHeaderProps;
};

export function Modal({
  children,
  animationType = 'slide',
  presentationStyle = 'formSheet',
  navigationHeader,
  ...props
}: ModalProps) {
  const styles = useStyles(createStyles);

  return (
    <RNModal
      {...props}
      animationType={animationType}
      presentationStyle={presentationStyle}>
      <NavigationHeader
        rightButtons={[{icon: 'X', onPress: props.onRequestClose}]}
        useStatusBarHeight={false}
        {...navigationHeader}
      />
      <View style={styles.container}>{children}</View>
    </RNModal>
  );
}

const createStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
  });
