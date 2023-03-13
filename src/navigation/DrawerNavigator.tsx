import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from '.';
import { HOME } from '../constants/routeNames';


const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName={HOME}>
      <Drawer.Screen name={HOME} component={HomeNavigator} options={{headerShown: false}} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;