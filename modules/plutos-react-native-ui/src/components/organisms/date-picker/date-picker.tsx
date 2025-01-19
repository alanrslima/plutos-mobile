import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ModalCalendar} from '../modal-calendar/modal-calendar';
import {Spacer, Typography} from '../../atoms';
import {useStyles} from '../../../hooks';
import {createStyles} from './date-picker.styles';

export function DatePicker() {
  const [visible, setVisible] = useState(false);

  const styles = useStyles(createStyles);

  return (
    <View>
      <Typography type="body-large-bold">Date</Typography>
      <Spacer h={3} />
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisible(true)}>
        <Typography type="body-large-bold">25 de fev, 2025</Typography>
      </TouchableOpacity>
      <ModalCalendar
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
}
