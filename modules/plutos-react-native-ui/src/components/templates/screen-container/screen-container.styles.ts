import styled from 'styled-components/native';

export const ScreenContainerView = styled.View<{
  $bottomSpace: number;
  $statusBarHeight: number;
}>`
  flex: 1;
  padding-top: ${({$statusBarHeight}) => $statusBarHeight}px;
  padding-bottom: ${({$bottomSpace}) => $bottomSpace}px;
  background-color: ${({theme}) => theme.colors.backgroundScreen};
`;

export const ScreenContainerContent = styled.View<{}>`
  flex: 1;
`;

export const ScreenContainerScroll = styled.ScrollView`
  flex: 1;
`;
