import React from 'react';
import {SelectOptionProps} from './select';
import {createStyles} from './select-modal.styles';
import {List} from '../../organisms';
import {SimpleLine} from '../simple-line/simple-line';
import {Wrapper} from '../../atoms';
import {useStyles} from '../../../hooks';
import {Modal} from '../../templates';

export type SelectModalProps = {
  options: SelectOptionProps[];
  visible: boolean;
  onRequestClose: () => void;
  onSelect: (value: string) => void;
};

export function SelectModal(props: SelectModalProps) {
  const styles = useStyles(createStyles);

  return (
    <Modal visible={props.visible} onRequestClose={props.onRequestClose}>
      <List
        contentContainerStyle={styles.contentList}
        data={props.options}
        renderItem={({item}) => (
          <Wrapper px={2} key={item.value}>
            <SimpleLine
              onPress={() => {
                props.onSelect(item.value);
                props.onRequestClose();
              }}
              leadingIcon={item.leadingIcon}
              leadingLabel={item.leadingLabel}
              leadingFlag={item.leadingFlag}
              description={item.description}
              title={item.title}
            />
          </Wrapper>
        )}
      />
    </Modal>
  );
}
