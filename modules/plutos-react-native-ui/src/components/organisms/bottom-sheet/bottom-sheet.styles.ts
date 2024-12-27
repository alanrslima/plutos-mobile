import {Animated, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {Typography} from '../../atoms';

export const BottomSheetContainer = styled.Modal.attrs({
  animationType: 'fade',
  transparent: true,
})`
  flex: 1;
`;

export const BackdropWrapper = styled(TouchableWithoutFeedback)``;

export const Backdrop = styled.View`
  flex: 1;
`;

export const BottomSheetOverlay = styled.View`
  background-color: ${({theme}) => theme.colors.blackA400};
  justify-content: flex-end;
  flex: 1;
`;

export const BottomSheetContent = styled(Animated.View)<{$bottomSpace: number}>`
  border-radius: ${({theme}) => theme.radii.lg};
  padding: ${({theme}) => theme.spaces[7]};
  padding-bottom: ${({$bottomSpace}) => `${$bottomSpace + 24}px`};
  background-color: ${({theme}) => theme.colors.backgroundScreen};
`;

export const BottomSheetHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.spaces[7]};
`;

export const BottomSheetTitle = styled(Typography).attrs({
  type: 'title-body',
})``;
