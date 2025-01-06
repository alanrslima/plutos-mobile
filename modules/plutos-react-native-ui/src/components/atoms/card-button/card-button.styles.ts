import styled from 'styled-components/native';
import {Typography} from '../typography/typography';

export const CardButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.backgroundElevated};
  gap: ${({theme}) => theme.spaces[2]};
  border-radius: ${({theme}) => theme.radii.md};
  padding: ${({theme}) => theme.spaces[3]} 0px;
`;

export const CardButtonText = styled(Typography)``;
