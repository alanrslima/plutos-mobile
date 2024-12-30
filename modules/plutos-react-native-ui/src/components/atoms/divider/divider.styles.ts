import {Typography} from 'plutos-react-native-ui';
import styled from 'styled-components/native';

export const DividerContainer = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.borderNeutral};
  margin: ${({theme}) => theme.spaces[7]} 0px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spaces[4]};
`;

export const PartialLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({theme}) => theme.colors.borderNeutral};
  margin: ${({theme}) => theme.spaces[7]} 0px;
`;

export const Label = styled(Typography).attrs({
  color: 'onBackgroundSecondary',
})``;
