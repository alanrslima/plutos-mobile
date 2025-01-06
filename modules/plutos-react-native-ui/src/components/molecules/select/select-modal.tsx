import React from 'react';
import {SelectOptionProps} from './select';
import {Container, createStyles} from './select-modal.styles';
import {List} from '../../organisms';
import {SimpleLine} from '../simple-line/simple-line';
import {Wrapper} from '../../atoms';
import {View} from 'react-native';
import {useStyles} from '../../../hooks';

export type SelectModalProps = {
  options: SelectOptionProps[];
  visible: boolean;
  onRequestClose: () => void;
  onSelect: (value: string) => void;
};

export function SelectModal(props: SelectModalProps) {
  const styles = useStyles(createStyles);

  return (
    <Container
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onRequestClose}
      presentationStyle="formSheet">
      <View style={styles.container}>
        <List
          contentContainerStyle={{padding: 24}}
          data={props.options}
          renderItem={({item}) => (
            <Wrapper px={2} key={item.value}>
              <SimpleLine
                onPress={() => {
                  props.onSelect(item.value);
                  props.onRequestClose();
                }}
                leadingLabel={item.leadingLabel}
                leadingFlag={item.leadingFlag}
                description={item.description}
                title={item.title}
              />
            </Wrapper>
          )}
        />
      </View>
    </Container>
  );
}
