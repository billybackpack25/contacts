import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONTACT_LIST, CREATE_CONTACT} from '../constants/routeNames';
import ContactScreen from 'screens/Home/ContactsScreen';
import CreateContactScreen from 'screens/Home/CreateContactScreen';

export type HomeStackParamList = {
  Contacts: undefined;
  'Create contact': {id: number} | undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={ContactScreen} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContactScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
