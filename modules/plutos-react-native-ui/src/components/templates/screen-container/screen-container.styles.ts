import {ColorProps} from 'plutos-react-native-ui';
import styled from 'styled-components/native';

export const ScreenContainerView = styled.ImageBackground<{
  $bottomSpace: number;
  $statusBarHeight: number;
  $bgColor: keyof ColorProps;
}>`
  flex: 1;
  padding-top: ${({$statusBarHeight}) => $statusBarHeight}px;
  padding-bottom: ${({$bottomSpace}) => $bottomSpace}px;
  background-color: ${({theme, $bgColor}) => theme.colors[$bgColor]};
`;

export const ScreenContainerContent = styled.View<{}>`
  flex: 1;
`;

export const ScreenContainerScroll = styled.ScrollView`
  flex: 1;
`;
