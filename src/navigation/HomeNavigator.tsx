import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONTACT_LIST} from '../constants/routeNames';
import ContactScreen from 'screens/Home/ContactsScreen';
import {Text} from 'react-native';

export type HomeStackParamList = {
  Contacts: undefined;
};

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
