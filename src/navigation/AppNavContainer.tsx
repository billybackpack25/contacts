import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from '.';
import {AuthNavigator} from '.';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login, setUser} from 'slices/auth';
import {navRef} from './RootNavigator';

export const AppNavContainer = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const getUser = async () => {
    const user_token = await AsyncStorage.getItem('USER');
    if (user_token) {
      dispatch(login(true));
      dispatch(setUser(JSON.parse(user_token)));
    }
    return true;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <NavigationContainer ref={navRef}>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
