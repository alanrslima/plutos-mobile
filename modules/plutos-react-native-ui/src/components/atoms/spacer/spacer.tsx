import React from 'react';
import {SpacerContainer} from './spacer.styles';
import {SpaceProps} from '../../../types';

export type SpacerProps = {
  h?: keyof SpaceProps;
  w?: string;
};

export function Spacer({h = 0, w}: SpacerProps) {
  return <SpacerContainer $w={w} $h={h} />;
}
