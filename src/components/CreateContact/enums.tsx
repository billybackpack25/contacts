import colors from 'assets/theme/colors';
import {AntDesign} from 'common/Icon';
import requestCameraPermission from 'common/ImagePicker/AndroidPermission';
import React from 'react';
import {Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  CreateContactFormType,
  OnChangeFormType,
} from 'screens/Home/CreateContactScreen';

type OptionsType = {
  onChangeText: ({
    name,
    value,
  }: OnChangeFormType<CreateContactFormType>) => void;
  closeSheet: () => void;
};

export const photoOptions = (props: OptionsType) => [
  {
    name: 'Take a photo',
    icon: <AntDesign name="camera" color={colors.grey} size={21} />,
    onPress: () => {
      requestCameraPermission().then(youHavePermission => {
        if (youHavePermission) {
          launchCamera({mediaType: 'photo'}).then(image => {
            if (image.assets) {
              props.onChangeText({
                name: 'contactPicture',
                value: image.assets[0].uri as string,
              });
            }
            if (image.errorCode) {
              switch (image.errorCode) {
                case 'camera_unavailable':
                  Alert.alert(
                    'Error Occured',
                    'The camera is unavailable on this device',
                  );
                  break;
                case 'permission':
                  Alert.alert(
                    'Permission Error',
                    "Doesn't look like you have the required permissions to take a photo",
                  );
                  break;
                default:
                  Alert.alert(
                    'Unknown error',
                    image.errorMessage
                      ? image.errorMessage
                      : 'Sorry about this',
                  );
                  break;
              }
            }

            props.closeSheet();
          });
        }
      });
    },
  },
  {
    name: 'Choose a photo',
    icon: <AntDesign name="picture" color={colors.grey} size={21} />,
    onPress: () => {
      launchImageLibrary({mediaType: 'photo'}, image => {
        if (image.assets) {
          props.onChangeText({
            name: 'contactPicture',
            value: image.assets[0].uri as string,
          });
        }
        props.closeSheet();
      });
    },
  },
];
