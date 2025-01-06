import styled from 'styled-components/native';
import {Typography} from '../typography/typography';
import {Flag} from '../flag/flag';

export const CurrencyLabelContainer = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spaces[4]};
  padding: ${({theme}) => theme.spaces[3]} ${({theme}) => theme.spaces[4]};
  border-radius: ${({theme}) => theme.radii.round};
  background-color: ${({theme}) => theme.colors.backgroundScreen};
  align-items: center;
  align-self: flex-start;
`;

export const CurrencyLabelText = styled(Typography)``;
