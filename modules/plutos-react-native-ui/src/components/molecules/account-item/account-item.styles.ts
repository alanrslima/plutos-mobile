import styled from 'styled-components/native';
import {Typography} from '../../atoms';

export const AccountItemContainer = styled.View<{$width?: number}>`
  padding: ${({theme}) => theme.spaces[7]};
  background-color: ${({theme}) => theme.colors.backgroundElevated};
  border-radius: ${({theme}) => theme.radii.xl};
  width: ${({$width}) => ($width ? `${$width}px` : 'auto')};
`;

export const AccountItemRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${({theme}) => theme.spaces[6]} 0px;
  gap: ${({theme}) => theme.spaces[4]};
`;

export const AccountItemLabel = styled(Typography).attrs({
  type: 'body-default',
})``;

export const AccountItemTitle = styled(Typography).attrs({
  type: 'title-screen',
})``;

export const AccountItemName = styled(Typography).attrs({
  type: 'title-group',
})``;
