import {ContactListType} from 'data/contacts';
import {RegisterFormType} from 'screens/Register/RegisterScreen';

export type HomeStackParamList = {
  Contacts: ContactListType | undefined;
  'Create contact': ContactListType | undefined;
  Settings: undefined;
  ContactDetail: ContactListType;
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
