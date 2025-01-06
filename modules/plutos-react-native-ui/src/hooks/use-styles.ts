import {DeviceProps, ThemeProps} from '../types';
import {useDevice} from './use-device';
import {useTheme} from './use-theme';

export type UseStylesProps = {};

export function useStyles<T>(
  createStyles: (theme: ThemeProps, device: DeviceProps) => T,
): T {
  const theme = useTheme();
  const device = useDevice();
  return createStyles(theme, device);
}
