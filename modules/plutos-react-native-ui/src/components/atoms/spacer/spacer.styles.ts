import styled from 'styled-components/native';
import {SpaceProps} from '../../../types';

export const SpacerContainer = styled.View<{$h: keyof SpaceProps; $w?: string}>`
  height: ${({$h, theme}) => theme.spaces[$h]};
  width: ${({$w}) => $w || 'auto'};
`;
