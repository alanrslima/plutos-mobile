import styled from 'styled-components/native';
import {Typography} from '../typography/typography';
import {Button} from '../button/button';

export const SectionHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const Content = styled.View``;

export const SectionHeaderText = styled(Typography).attrs({
  type: 'title-screen',
})``;

export const SectionHeaderDescription = styled(Typography).attrs({
  color: 'onSurfaceSecondary',
})``;

export const SectionHeaderButton = styled(Button).attrs({
  variant: 'minimal',
})``;
