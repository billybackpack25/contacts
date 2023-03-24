import React, {useCallback, useEffect, useState} from 'react';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from 'common/Icon';
import ContactsComponent from 'components/Contacts/ContactsComponent';
import {ContactScreenProps} from 'screens/types';
import colors from 'assets/theme/colors';
import HorizontalLine from 'common/UI/HorizontalLine';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactScreen: React.FC<ContactScreenProps> = props => {
  const {setOptions} = props.navigation;
  const [sortBy, setSortBy] = useState<string>('First name');

  const getSettings = async () => {
    const sortByAsync = await AsyncStorage.getItem('sortBy');
    if (sortByAsync) setSortBy(sortByAsync);
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  useEffect(() => {
    setOptions({
      headerTitleAlign: 'center',
      header: () => (
        <View>
          <View
            style={{
              paddingTop: 60,
              paddingBottom: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: colors.white,
              alignItems: 'center',
            }}>
            <View style={{position: 'absolute', left: 10, top: 55}}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.dispatch(DrawerActions.toggleDrawer())
                }>
                <MaterialIcons name="menu" size={30} color={colors.grey} />
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Text style={{fontSize: 17, fontWeight: '500'}}>
                {props.route.name}
              </Text>
            </View>
            <View></View>
          </View>
          <HorizontalLine />
        </View>
      ),
    });
  }, []);

  return <ContactsComponent sortBy={sortBy} />;
};

export default ContactScreen;
