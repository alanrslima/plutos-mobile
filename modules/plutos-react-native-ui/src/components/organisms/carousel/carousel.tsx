import React, {Fragment, ReactNode} from 'react';
import {CarouselContainer} from './carousel.styles';

export type CarouselProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

export function Carousel<T>(props: CarouselProps<T>) {
  return (
    <CarouselContainer>
      {props.data.map((item, index) => (
        <Fragment key={index}>{props.renderItem(item, index)}</Fragment>
      ))}
    </CarouselContainer>
  );
}
