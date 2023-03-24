import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList, HomeStackParamList} from 'navigation/types';

// AUTH VIEWS

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Login'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Register'
>;

// HOME VIEWS

export type ContactScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Contacts'
>;

export type CreateContactScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Create contact'
>;

export type SettingsScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Settings'
>;
