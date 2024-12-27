export enum OrientationEnum {
  Landscape,
  Portrait,
}

export enum SizeEnum {
  Small,
  Medium,
  Large,
}

export type DeviceProps = {
  orientation: OrientationEnum;
  size: SizeEnum;
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  statusBarHeight: number;
  bottomSpace: number;
  isDarkMode: boolean;
};
