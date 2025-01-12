import styled from 'styled-components/native';
import {Icon, Typography} from '../../atoms';

export const NavigationLineLeftContent = styled.View`
  height: 54px;
  width: 54px;
  border-radius: ${({theme}) => theme.radii.round};
  background-color: ${({theme}) => theme.colors.backgroundElevated};
  justify-content: center;
  align-items: center;
`;

export const NavigationLineLeadingIcon = styled(Icon)``;

export const NavigationLineContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spaces[5]};
  flex: 1;
`;

export const NavigationLineContent = styled.View`
  flex: 1;
`;

export const NavigationLineTitle = styled(Typography).attrs({
  type: 'body-large',
})``;

export const NavigationLineOverline = styled(Typography).attrs({
  type: 'caption',
  color: 'onSurfaceSecondary',
})``;

export const NavigationLineDescription = styled(Typography).attrs({
  color: 'onBackgroundSecondary',
})``;

export const NavigationLineRightContent = styled.View``;

export const NavigationLineValue = styled(Typography).attrs({
  type: 'body-large-bold',
})``;
