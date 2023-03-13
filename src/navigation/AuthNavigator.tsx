import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, REGISTER as REG} from 'constants/routeNames';
import LoginScreen from 'screens/Login/LoginScreen';
import RegisterScreen from 'screens/Register/RegisterScreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REG} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;