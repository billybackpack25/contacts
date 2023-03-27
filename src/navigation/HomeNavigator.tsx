import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ContactScreen from 'screens/Home/ContactDetailsScreen';
import ContactsScreen from 'screens/Home/ContactsScreen';
import CreateContactScreen from 'screens/Home/CreateContactScreen';
import SettingsScreen from 'screens/Settings/SettingsScreen';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import {HomeStackParamList} from './types';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen
        name={CONTACT_LIST}
        component={ContactsScreen}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen
        name={CONTACT_DETAIL}
        component={ContactScreen}
        options={{title: 'Contact Details'}}
      />
      <Stack.Screen
        name={CREATE_CONTACT}
        component={CreateContactScreen}
        options={{title: 'Create Contact'}}
      />
      <Stack.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
