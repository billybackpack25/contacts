import colors from 'assets/theme/colors';
import Container from 'common/container';
import ButtonComponent from 'common/CustomButton/ButtonComponent';
import {AntDesign} from 'common/Icon';
import ImagePicker from 'common/ImagePicker/ImagePicker';
import InputComponent from 'common/Input/InputComponent';
import {DEFAULT_PROFILE_URI} from 'constants/general';
import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {countryCodes} from 'react-native-country-codes-picker/constants/countryCodes';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  CreateContactFormType,
  OnChangeFormType,
} from 'screens/Home/CreateContactScreen';
import {photoOptions} from './enums';
import styles from './styles';

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

  const sheetRef = useRef<RBSheet | null>(null);

  useEffect(() => {
    const initialCountryState = () => {
      const item = countryCodes.filter(i => i.code === 'GB')[0];
      onChangeText({name: 'countryCode', value: item.dial_code});
      setFlag(
        <Text>
          {item.flag} {item.dial_code}
        </Text>,
      );
    };
    initialCountryState();
  }, [onChangeText]);

  const closeSheet = () => sheetRef.current && sheetRef.current.close();
  const openSheet = () => sheetRef.current && sheetRef.current.open();

  const rBSheetOptions = () =>
    photoOptions({onChangeText, closeSheet}).map(({name, icon, onPress}) => (
      <View key={name} style={styles.pickerContentWrapper}>
        <TouchableOpacity style={styles.pickerRow} onPress={onPress}>
          {icon}
          <Text style={styles.pickText}>{name}</Text>
        </TouchableOpacity>
      </View>
    ));

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.imageAndText}>
          <Image
            source={{
              uri: getFormValue('contactPicture') || DEFAULT_PROFILE_URI,
            }}
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
