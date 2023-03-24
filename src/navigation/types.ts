import {RegisterFormType} from 'screens/Register/RegisterScreen';

export type HomeStackParamList = {
  Contacts: undefined;
  'Create contact': undefined;
  Settings: undefined;
};

// Navigating to the login screen can take register params
export type AuthStackParamList = {
  Login: RegisterFormType | undefined;
  Register: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}
