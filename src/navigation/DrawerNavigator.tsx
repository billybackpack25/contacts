import React, {Dispatch} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {HomeNavigator} from '.';
import {HOME} from '../constants/routeNames';
import {useAppDispatch} from 'hooks/redux';
import {useWindowDimensions} from 'react-native';
import SideMenu from './SideMenu/SideMenu';
import {AnyAction} from '@reduxjs/toolkit';

export type CustomDrawerType = DrawerContentComponentProps & {dispatch: any};

const CustomDrawerContent = (props: CustomDrawerType) => {
  return <SideMenu {...props} />;
};

type DrawerContentProps = {
  dispatch: Dispatch<AnyAction>;
  props: DrawerContentComponentProps;
};

const drawerContent = ({dispatch, props}: DrawerContentProps) => (
  <CustomDrawerContent {...props} dispatch={dispatch} />
);

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      initialRouteName={HOME}
      drawerContent={props => drawerContent({dispatch, props})}>
      <Drawer.Screen
        name={HOME}
        component={HomeNavigator}
        options={{
          drawerLabel: 'Contacts',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
