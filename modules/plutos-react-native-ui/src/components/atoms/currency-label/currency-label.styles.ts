import styled from 'styled-components/native';
import CountryFlag from 'react-native-country-flag';
import {Typography} from '../typography/typography';

export const CurrencyLabelContainer = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spaces[4]};
  padding: ${({theme}) => theme.spaces[3]} ${({theme}) => theme.spaces[4]};
  border-radius: ${({theme}) => theme.radii.round};
  background-color: ${({theme}) => theme.colors.backgroundScreen};
  align-items: center;
  align-self: flex-start;
`;

export const CurrencyLabelFlag = styled(CountryFlag)`
  border-radius: ${({theme}) => theme.radii.round};
  height: 32px;
  width: 32px;
`;

export const CurrencyLabelText = styled(Typography)``;
