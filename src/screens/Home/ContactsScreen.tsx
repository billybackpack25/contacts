import React, {useEffect, useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from 'hooks/redux';
import {Text, TouchableOpacity} from 'react-native';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import {MaterialIcons} from 'common/Icon';
import ContactsComponent from 'components/Contacts/ContactsComponent';
import Container from 'common/container';

export type ContactScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Contacts'
>;

const ContactScreen: React.FC<ContactScreenProps> = props => {
  const {setOptions} = props.navigation;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setOptions({
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <MaterialIcons name="menu" size={21} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default ContactScreen;
