import React from 'react';
import {ReactNode} from 'react';
import {
  ScreenContainerContent,
  ScreenContainerScroll,
  ScreenContainerView,
} from './screen-container.styles';
import {useDevice} from '../../../hooks';

export type ScreenContainerProps = {
  children: ReactNode;
  type?: 'scroll' | 'view';
  footer?: ReactNode;
  header?: ReactNode;
  withoutBottomSpace?: boolean;
  withoutTopSpace?: boolean;
};

export function ScreenContainer({
  children,
  type = 'scroll',
  footer,
  header,
  withoutBottomSpace,
  withoutTopSpace,
}: ScreenContainerProps) {
  const {bottomSpace, statusBarHeight} = useDevice();

  if (type === 'scroll') {
    return (
      <ScreenContainerView
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
      $bottomSpace={withoutBottomSpace ? 0 : bottomSpace}
      $statusBarHeight={withoutTopSpace ? 0 : statusBarHeight}>
      {header}
      <ScreenContainerContent>{children}</ScreenContainerContent>
      {footer}
    </ScreenContainerView>
  );
}
