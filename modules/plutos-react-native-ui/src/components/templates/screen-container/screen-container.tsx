import React from 'react';
import {ReactNode} from 'react';
import {
  ScreenContainerContent,
  ScreenContainerScroll,
  ScreenContainerView,
} from './screen-container.styles';
import {useDevice} from '../../../hooks';
import {ColorProps} from 'plutos-react-native-ui';
import {ImageSourcePropType} from 'react-native';

export type ScreenContainerProps = {
  children: ReactNode;
  type?: 'scroll' | 'view';
  footer?: ReactNode;
  header?: ReactNode;
  withoutBottomSpace?: boolean;
  withoutTopSpace?: boolean;
  bgColor?: keyof ColorProps;
  bgSource?: ImageSourcePropType;
};

export function ScreenContainer({
  children,
  type = 'scroll',
  footer,
  header,
  withoutBottomSpace,
  withoutTopSpace,
  bgColor = 'backgroundScreen',
  bgSource,
}: ScreenContainerProps) {
  const {bottomSpace, statusBarHeight} = useDevice();

  if (type === 'scroll') {
    return (
      <ScreenContainerView
        source={bgSource}
        $bgColor={bgColor}
        $bottomSpace={withoutBottomSpace ? 0 : bottomSpace}
        $statusBarHeight={withoutTopSpace ? 0 : statusBarHeight}>
        {header}
        <ScreenContainerScroll>{children}</ScreenContainerScroll>
        {footer}
      </ScreenContainerView>
    );
  }

  return (
    <ScreenContainerView
      source={bgSource}
      $bgColor={bgColor}
      $bottomSpace={withoutBottomSpace ? 0 : bottomSpace}
      $statusBarHeight={withoutTopSpace ? 0 : statusBarHeight}>
      {header}
      <ScreenContainerContent>{children}</ScreenContainerContent>
      {footer}
    </ScreenContainerView>
  );
}
