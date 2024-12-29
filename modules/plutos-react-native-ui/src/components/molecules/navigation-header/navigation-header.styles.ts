import styled from 'styled-components/native';
import {Typography} from '../../atoms';

const HEADER_HEIGHT = 70;

export const NavigationHeaderContainer = styled.View<{
  $statusBarHeight: number;
}>`
  height: ${({$statusBarHeight}) => `${$statusBarHeight + HEADER_HEIGHT}px`};
  padding-top: ${({$statusBarHeight}) => `${$statusBarHeight}px`};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.borderNeutral};
`;

export const NavigationHeaderContent = styled.View`
  flex: 1;
  padding: 0px ${({theme}) => theme.spaces[7]};
  align-items: center;
  gap: 24px;
  flex-direction: row;
`;

export const NavigationHeaderLeft = styled.View`
  flex: 1;
  align-items: center;
  gap: 24px;
  flex-direction: row;
`;

export const NavigationHeaderRight = styled.View`
  flex: 1;
  align-items: center;
  gap: 24px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavigationHeaderWrapperTitle = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const NavigationHeaderTitle = styled(Typography).attrs({
  type: 'body-large',
})``;
