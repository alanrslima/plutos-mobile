import React from 'react';
import {icons} from 'lucide-react-native';
import {ColorProps} from '../../../types';
import {useTheme} from 'styled-components/native';

export type IconNames = keyof typeof icons;

export type IconProps = {
  name: IconNames;
  size?: number;
  color?: keyof ColorProps;
};

export function Icon({name, color = 'blackA900', size}: IconProps) {
  const LucideIcon = icons[name];

  const {colors} = useTheme();
  const iconColor = colors[color];

  return <LucideIcon size={size} color={iconColor} />;
}
