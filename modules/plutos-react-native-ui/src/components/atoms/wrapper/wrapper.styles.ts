import styled from 'styled-components/native';
import {SpaceProps} from '../../../types';

export const WrapperContainer = styled.View<{
  $px: keyof SpaceProps;
  $py: keyof SpaceProps;
  $flexDir: 'column' | 'row';
  $gap: keyof SpaceProps;
}>`
  padding: ${({$py, $px, theme}) =>
    `${theme.spaces[$px]} ${theme.spaces[$py]}`};
  flex-direction: ${({$flexDir}) => $flexDir};
  gap: ${({$gap, theme}) => theme.spaces[$gap]};
`;
