import {View, Text, Image, Switch, Button} from 'react-native';
import React, {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles';
import Container from 'common/container';
import InputComponent from 'common/Input/InputComponent';
import ButtonComponent from 'common/CustomButton/ButtonComponent';
import {CountryPicker} from 'react-native-country-codes-picker';
import {AntDesign} from 'common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'assets/theme/colors';
import {DEFAULT_PROFILE_URI} from 'constants/general';
import {
  CreateContactFormType,
  OnChangeFormType,
} from 'screens/Home/CreateContactScreen';
import {countryCodes} from 'react-native-country-codes-picker/constants/countryCodes';
import ImagePicker from 'common/ImagePicker/ImagePicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import requestCameraPermission from 'common/ImagePicker/AndroidPermission';
// import ImageCropPicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type CreateContactComponentProps = {
  onChangeText: ({
    name,
    value,
  }: OnChangeFormType<CreateContactFormType>) => void;
  getFormValue: (name: keyof CreateContactFormType) => any;
  onSubmit: () => void;
  errors: CreateContactFormType;
};

const CreateContactComponent: React.FC<CreateContactComponentProps> = props => {
  const {onChangeText, getFormValue, onSubmit, errors} = props;
  const [showCountryCodeModal, setShowCountryCodeModal] =
    useState<boolean>(false);
  const [flag, setFlag] = useState<ReactElement>(
    <AntDesign name="flag" size={21} color={colors.danger} />,
  );
  useEffect(() => {
    initialCountryState();
  }, []);

  const sheetRef = useRef<RBSheet | null>(null);

  const initialCountryState = () => {
    const item = countryCodes.filter(i => i.code === 'GB')[0];
    onChangeText({name: 'countryCode', value: item.dial_code});
    setFlag(
      <Text>
        {item.flag} {item.dial_code}
      </Text>,
    );
  };

  const closeSheet = () => sheetRef.current && sheetRef.current.close();
  const openSheet = () => sheetRef.current && sheetRef.current.open();

  const options = [
    {
      name: 'Take a photo',
      icon: <AntDesign name="camera" color={colors.grey} size={21} />,
      onPress: async () => {
        const result = await launchCamera({
          mediaType: 'photo',
        });
        console.log(result);
        // launchCamera({mediaType: 'photo'}, item => {
        //   console.log(item);
        // }).then(image => console.log(image));
      },
      // ImageCropPicker.openCamera({
      //   width: 300,
      //   height: 300,
      //   cropping: true,
      //   freeStyleCropEnabled: true,
      // })
      //   .then(image => {
      //     console.log(image);
      //     onFileSelected(image);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    {
      name: 'Choose a photo',
      icon: <AntDesign name="picture" color={colors.grey} size={21} />,
      onPress: () => {
        // ImageCropPicker.openPicker({
        //   width: 300,
        //   height: 300,
        //   cropping: true,
        //   freeStyleCropEnabled: true,
        // })
        //   .then(image => {
        //     console.log(image);
        //     onFileSelected(image);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      },
    },
    {
      name: 'Permission',
      icon: (
        <ButtonComponent
          state="info"
          title="Permission"
          onPress={requestCameraPermission}
        />
      ),
    },
  ];

  const rBSheetOptions = () =>
    options.map(({name, icon, onPress}) => (
      <View key={name} style={styles.pickerContentWrapper}>
        <TouchableOpacity style={styles.pickerRow} onPress={onPress}>
          {icon}
          <Text style={styles.pickText}>{name}</Text>
        </TouchableOpacity>
      </View>
    ));

  const onFileSelected = (image: any) => {
    console.log(image);
    closeSheet();
  };

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.imageAndText}>
          <Image
            source={{uri: DEFAULT_PROFILE_URI}}
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={openSheet}>
            <Text style={styles.chooseImageText}>Choose Image</Text>
          </TouchableOpacity>
        </View>
        <InputComponent
          value={getFormValue('firstName')}
          label="First name"
          placeholder="Enter first name"
          onChangeText={(value: string) =>
            onChangeText({name: 'firstName', value})
          }
          error={errors.firstName}
        />
        <InputComponent
          value={getFormValue('lastName')}
          label="Last name"
          placeholder="Enter last name"
          onChangeText={(value: string) =>
            onChangeText({name: 'lastName', value})
          }
          error={errors.lastName}
        />
        <InputComponent
          onChangeText={(value: string) =>
            onChangeText({name: 'phoneNumber', value})
          }
          value={getFormValue('phoneNumber')}
          label="Phone number"
          placeholder="Enter phone number"
          icon={
            <TouchableOpacity onPress={() => setShowCountryCodeModal(true)}>
              {flag}
            </TouchableOpacity>
          }
          iconPosition="left"
          error={errors.phoneNumber || errors.countryCode}
        />
        <View style={styles.fav}>
          <Text style={styles.favText}>Add to favorites</Text>
          <Switch
            trackColor={{false: colors.grey, true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor={colors.grey}
            onValueChange={() =>
              onChangeText({
                name: 'isFavourite',
                value: !getFormValue('isFavourite'),
              })
            }
            value={getFormValue('isFavourite')}
          />
        </View>

        <ButtonComponent title="Save" state="info" onPress={onSubmit} />
        <View style={{paddingTop: 50}}>
          <CountryPicker
            lang="en"
            show={showCountryCodeModal}
            pickerButtonOnPress={item => {
              onChangeText({name: 'countryCode', value: item.dial_code});
              setFlag(
                <Text>
                  {item.flag} {item.dial_code}
                </Text>,
              );
              setShowCountryCodeModal(false);
            }}
            onBackdropPress={() => setShowCountryCodeModal(false)}
            style={{
              modal: {
                maxHeight: 600,
              },
            }}
            showOnly={['GB', 'US']}
          />
        </View>
      </Container>
      <ImagePicker ref={sheetRef}>{rBSheetOptions()}</ImagePicker>
    </View>
  );
};

export default CreateContactComponent;
