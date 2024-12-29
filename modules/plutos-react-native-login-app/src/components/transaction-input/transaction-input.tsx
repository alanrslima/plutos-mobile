import React, {useState} from 'react';
import {
  TransactionInputContainer,
  TransactionInputContent,
  TransactionInputKeyboard,
  TransactionInputKeyboardButton,
  TransactionInputKeyboardButtonText,
  TransactionInputKeyboardRow,
  TransactionInputValue,
} from './transaction-input.styles';
import {Button} from 'plutos-react-native-ui';

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

export function TransactionInput() {
  const [value, setValue] = useState('0');

  function onPressKey(key: string) {
    let text = `${value}${key}`;
    if (key === 'x') {
      text = value.slice(0, -1);
    }

    // Remove caracteres que não sejam números

    const numericValue = text.replace(/\D/g, '');

    // Formatar para o formato de moeda
    const formattedValue = (Number(numericValue) / 100).toFixed(2);

    // Atualizar o estado com o valor formatado
    setValue(formattedValue);
    // setValue(prev => `${prev}${key}`);
  }

  return (
    <TransactionInputContainer>
      <TransactionInputContent>
        <TransactionInputValue numberOfLines={1} adjustsFontSizeToFit>
          {formatCurrency(value, 'pt-BR', 'BRL')}
        </TransactionInputValue>
      </TransactionInputContent>
      <Button title="Salvar" full size="lg" />
      <TransactionInputKeyboard>
        {keyboardLayout.map((row, index) => (
          <TransactionInputKeyboardRow key={index}>
            {row.map(item => (
              <TransactionInputKeyboardButton
                onPress={() => onPressKey(item)}
                key={item}>
                <TransactionInputKeyboardButtonText>
                  {item}
                </TransactionInputKeyboardButtonText>
              </TransactionInputKeyboardButton>
            ))}
          </TransactionInputKeyboardRow>
        ))}
      </TransactionInputKeyboard>
    </TransactionInputContainer>
  );
}
