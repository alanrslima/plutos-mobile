import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from '../../../hooks';
import {createStyles} from './segmented-control.styles';
import {Icon, IconNames, Typography} from '../../atoms';

export type SegmentedControlProps = {
  items: {title: string; value: string; icon?: IconNames}[];
  value: string;
  label?: string;
  onChangeValue(value: string): void;
};

export function SegmentedControl(props: SegmentedControlProps) {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.wrapper}>
      {props.label && (
        <Typography type="body-large-bold">{props.label}</Typography>
      )}
      <View style={styles.container}>
        {props.items?.map(item => (
          <TouchableOpacity
            onPress={() => props.onChangeValue(item.value)}
            key={item.title}
            style={[
              styles.button,
              props.value === item.value && styles.buttonSelected,
            ]}>
            {item.icon && <Icon name={item.icon} />}
            <Typography type="body-default-bold">{item.title}</Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
