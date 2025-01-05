import styled from 'styled-components/native';
import {Flag, Icon, Typography} from '../../atoms';

export const SimpleLineLeftContent = styled.View`
  height: 60px;
  width: 60px;
  border-radius: ${({theme}) => theme.radii.round};
  background-color: ${({theme}) => theme.colors.backgroundElevated};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SimpleLineLeadingIcon = styled(Icon)``;

export const SimpleLineLeadingFlag = styled(Flag)``;

export const SimpleLineLeadingLabel = styled(Typography).attrs({
  type: 'body-default-bold',
})``;

export const SimpleLineContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spaces[5]};
`;

export const SimpleLineContent = styled.View`
  flex: 1;
`;

export const SimpleLineTitle = styled(Typography).attrs({type: 'body-large'})``;

export const SimpleLineDescription = styled(Typography).attrs({
  color: 'onBackgroundSecondary',
})``;

export const SimpleLineRightContent = styled.View``;

export const SimpleLineValue = styled(Typography).attrs({
  type: 'body-large-bold',
})``;
