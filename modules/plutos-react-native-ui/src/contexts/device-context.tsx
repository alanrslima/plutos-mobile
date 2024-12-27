import React, {useState, createContext, ReactNode} from 'react';
import {View, StyleSheet, LayoutChangeEvent, Dimensions} from 'react-native';

import {DeviceProps, OrientationEnum, SizeEnum} from '../types/device';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type DeviceContextProps = DeviceProps;

export type DeviceProviderProps = {
  children: ReactNode;
};

export const DeviceContext = createContext<DeviceContextProps>(
  {} as DeviceContextProps,
);

export const DeviceProvider: React.FC<DeviceProviderProps> = ({children}) => {
  const [device, setDevice] = useState<DeviceProps>({
    bottomSpace: 0,
    statusBarHeight: 0,
    fontScale: 0,
    height: 0,
    width: 0,
    isDarkMode: false,
    orientation: 0,
    scale: 0,
    size: 0,
  });
  const {bottom, top} = useSafeAreaInsets();

  const calculateSize = (width: number) => {
    if (width > 1000) {
      return SizeEnum.Large;
    } else if (width > 600) {
      return SizeEnum.Medium;
    }
    return SizeEnum.Small;
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const windowDimension = Dimensions.get('window');
    const orientation =
      windowDimension.width > windowDimension.height
        ? OrientationEnum.Landscape
        : OrientationEnum.Portrait;

    const value: DeviceProps = {
      orientation,
      size: calculateSize(width),
      width,
      height,
      scale: windowDimension.scale,
      fontScale: windowDimension.fontScale,
      statusBarHeight: top,
      bottomSpace: bottom,
      isDarkMode: true,
    };

    setDevice((prevState: DeviceProps) => {
      if (JSON.stringify(prevState) === JSON.stringify(value)) {
        return prevState;
      }
      return value;
    });
  };

  return (
    <DeviceContext.Provider value={device}>
      <View onLayout={onLayout} style={style.wrapper}>
        {device !== null && children}
      </View>
    </DeviceContext.Provider>
  );
};

const style = StyleSheet.create({
  wrapper: {flex: 1, width: '100%', height: '100%'},
});
