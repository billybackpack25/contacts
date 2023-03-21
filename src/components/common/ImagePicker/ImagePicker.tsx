import React, {ReactNode} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

interface Props {
  children?: ReactNode;
}
export type Ref = RBSheet;

const ImagePicker = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      closeOnPressMask
      height={200}
      openDuration={500}
      customStyles={{
        container: {
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        },
        wrapper: {
          // backgroundColor: 'transparent',
        },
      }}>
      {props.children}
    </RBSheet>
  );
});

export default ImagePicker;
