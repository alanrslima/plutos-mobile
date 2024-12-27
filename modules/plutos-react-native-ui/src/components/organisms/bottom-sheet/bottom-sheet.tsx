import React, {ReactNode, useImperativeHandle, useState} from 'react';
import {
  Backdrop,
  BackdropWrapper,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetOverlay,
  BottomSheetTitle,
} from './bottom-sheet.styles';
import {Animated, useAnimatedValue} from 'react-native';
import {IconButton} from '../../atoms';
import {useDevice} from '../../../hooks';

export type BottomSheetShowProps = {
  title: string;
};

export type BottomSheetHandle = {
  show: (props: BottomSheetShowProps) => void;
  hide: () => void;
};

export type BottomSheetProps = {
  content: ReactNode;
};

export const BottomSheet = React.forwardRef<
  BottomSheetHandle,
  BottomSheetProps
>((props, ref) => {
  const {bottomSpace} = useDevice();

  const [visible, setVisible] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [title, setTitle] = useState('');
  const animatedTranslateY = useAnimatedValue(300, {useNativeDriver: true});

  function show(values: BottomSheetShowProps) {
    setTitle(values.title);
    setVisible(true);
    Animated.timing(animatedTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  function hide() {
    Animated.timing(animatedTranslateY, {
      toValue: contentHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  }

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  return (
    <BottomSheetContainer visible={visible} onRequestClose={() => {}}>
      <BottomSheetOverlay>
        <BackdropWrapper onPress={hide}>
          <Backdrop />
        </BackdropWrapper>
        <BottomSheetContent
          $bottomSpace={bottomSpace}
          onLayout={evt => setContentHeight(evt.nativeEvent.layout.height)}
          style={{transform: [{translateY: animatedTranslateY}]}}>
          <BottomSheetHeader>
            <BottomSheetTitle>{title}</BottomSheetTitle>
            <IconButton size="sm" icon="X" onPress={hide} />
          </BottomSheetHeader>
          {props.content}
        </BottomSheetContent>
      </BottomSheetOverlay>
    </BottomSheetContainer>
  );
});
