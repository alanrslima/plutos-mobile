import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../typography/typography';
import {useStyles} from '../../../hooks';
import {createStyles} from './chip.styles';

export type ChipProps = {
  text: string;
};

export function Chip(props: ChipProps) {
  const styles = useStyles(createStyles);

  return (
    <TouchableOpacity style={styles.container}>
      <Typography>{props.text}</Typography>
    </TouchableOpacity>
  );
}
