import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from '.';
import {AuthNavigator} from '.';
import {useAppSelector} from '../hooks/redux';

export const AppNavContainer = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
