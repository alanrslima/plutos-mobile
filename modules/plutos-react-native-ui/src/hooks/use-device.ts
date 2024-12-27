import {DeviceContext} from '../contexts/device-context';
import {useContext} from 'react';

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};
