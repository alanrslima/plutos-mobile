import React from 'react';
import {CalendarList} from 'react-native-calendars';
import {Modal, ModalProps} from '../../templates';

export type ModalCalendarProps = ModalProps & {};

export function ModalCalendar(props: ModalCalendarProps) {
  return (
    <Modal {...props}>
      <CalendarList
      // testID={testIDs.calendarList.CONTAINER}
      // current={initialDate}
      // pastScrollRange={RANGE}
      // futureScrollRange={RANGE}
      // onDayPress={onDayPress}
      // markedDates={marked}
      // renderHeader={!horizontalView ? renderCustomHeader : undefined}
      // calendarHeight={!horizontalView ? 390 : undefined}
      // theme={!horizontalView ? theme : undefined}
      // horizontal={horizontalView}
      // pagingEnabled={horizontalView}
      // staticHeader={horizontalView}
      />
    </Modal>
  );
}
