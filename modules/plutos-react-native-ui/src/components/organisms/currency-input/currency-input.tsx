import React, {useEffect, useState} from 'react';
import {
  createStyles,
  CurrencyInputKeyboard,
  CurrencyInputKeyboardButton,
  CurrencyInputKeyboardButtonText,
  CurrencyInputKeyboardRow,
  InputLabel,
  InputValue,
  WrapperButton,
  WrapperInput,
} from './currency-input.styles';
import {Button, Typography, useStyles, Wrapper} from 'plutos-react-native-ui';
import {
  Animated,
  Modal,
  TouchableWithoutFeedback,
  useAnimatedValue,
  View,
} from 'react-native';

const keyboardLayout = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', 'x'],
];

const formatCurrency = (value: string, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(Number(value));
};

type CurrencyModalProps = {
  visible: boolean;
  value: string;
  locale: string;
  currency: string;
  onRequestClose: () => void;
  onSave: (value: string) => void;
};

function CurrencyModal(props: CurrencyModalProps) {
  const [value, setValue] = useState('0');
  const yAnim = useAnimatedValue(300);

  function onPressKey(key: string) {
    let text = `${value}${key}`;
    if (key === 'x') {
      text = value.slice(0, -1);
    }
    const numericValue = text.replace(/\D/g, '');
    const formattedValue = (Number(numericValue) / 100).toFixed(2);
    setValue(formattedValue);
  }

  useEffect(() => {
    Animated.timing(yAnim, {
      toValue: props.visible ? 0 : 300,
      useNativeDriver: true,
      duration: 300,
    }).start();
  }, [props.visible, yAnim]);

  const styles = useStyles(createStyles);

  return (
    <Modal
      visible={props.visible}
      animationType="fade"
      transparent
      onRequestClose={props.onRequestClose}
      presentationStyle="overFullScreen">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={props.onRequestClose}>
          <View style={styles.offset} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.content, {transform: [{translateY: yAnim}]}]}>
          <View style={styles.wrapperValue}>
            <Typography
              color="onSecondaryPrimary"
              numberOfLines={1}
              type="title-screen"
              adjustsFontSizeToFit>
              {formatCurrency(value, props.locale, props.currency)}
            </Typography>
          </View>

          <CurrencyInputKeyboard>
            {keyboardLayout.map((row, index) => (
              <CurrencyInputKeyboardRow key={index}>
                {row.map(item => (
                  <CurrencyInputKeyboardButton
                    onPress={() => onPressKey(item)}
                    key={item}>
                    <CurrencyInputKeyboardButtonText>
                      {item}
                    </CurrencyInputKeyboardButtonText>
                  </CurrencyInputKeyboardButton>
                ))}
              </CurrencyInputKeyboardRow>
            ))}
          </CurrencyInputKeyboard>
          <Wrapper gap={4} flexDir="row">
            <WrapperButton>
              <Button
                title="Cancel"
                variant="secondary"
                onPress={props.onRequestClose}
                full
                size="lg"
              />
            </WrapperButton>
            <WrapperButton>
              <Button
                title="Save"
                onPress={() => props.onSave(value)}
                full
                size="lg"
              />
            </WrapperButton>
          </Wrapper>
        </Animated.View>
      </View>
    </Modal>
  );
}

export type CurrencyInputProps = {
  value: string;
  label?: string;
  locale: string;
  currency: string;
  onSaveValue: (value: string) => void;
};

export function CurrencyInput({
  onSaveValue,
  value,
  locale,
  currency,
  label = 'Value',
}: CurrencyInputProps) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <WrapperInput onPress={openModal}>
        <InputLabel>{label}</InputLabel>
        <InputValue> {formatCurrency(value, locale, currency)}</InputValue>
      </WrapperInput>
      <CurrencyModal
        locale={locale}
        currency={currency}
        value={value}
        onRequestClose={closeModal}
        onSave={data => {
          onSaveValue(data);
          closeModal();
        }}
        visible={showModal}
      />
    </>
  );
}
