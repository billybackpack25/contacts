import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ContactsComponent from 'components/Contacts/ContactsComponent';
import useSetHeader from 'hooks/useSetHeader';
import React, {useCallback, useState} from 'react';
import {ContactScreenProps} from 'screens/types';

const ContactsScreen: React.FC<ContactScreenProps> = props => {
  const [sortBy, setSortBy] = useState<string>('First name');
  useSetHeader({home: true});

  const getSettings = async () => {
    const sortByAsync = await AsyncStorage.getItem('sortBy');
    if (sortByAsync) {
      setSortBy(sortByAsync);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  return <ContactsComponent sortBy={sortBy} {...props} />;
};

export default ContactsScreen;
