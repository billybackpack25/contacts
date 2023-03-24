import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONTACT_LIST, CREATE_CONTACT, SETTINGS} from '../constants/routeNames';
import ContactScreen from 'screens/Home/ContactsScreen';
import CreateContactScreen from 'screens/Home/CreateContactScreen';
import SettingsScreen from 'screens/Settings/SettingsScreen';
import {HomeStackParamList} from './types';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={ContactScreen} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContactScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
