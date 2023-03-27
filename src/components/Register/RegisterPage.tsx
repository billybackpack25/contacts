import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import CustomButton from 'common/CustomButton/ButtonComponent';
import Input from 'common/Input/InputComponent';
import MessageComponent from 'common/Message/Message';
import Container from 'components/common/container';
import {LOGIN} from 'constants/routeNames';
import {useAppSelector} from 'hooks/redux';
import useTogglePasswordVisibility from 'hooks/useTogglePasswordVisibility';
import {RegisterFormType} from 'screens/Register/RegisterScreen';
import {RegisterScreenProps} from 'screens/types';
import styles from './styles';

export type AuthFormType = {
  getFormValue: Function;
  form: RegisterFormType;
  errors: RegisterFormType;
  onChange: Function;
  onSubmit: Function;
};

const RegisterPage: React.FC<AuthFormType & RegisterScreenProps> = ({
  onChange,
  getFormValue,
  navigation,
  errors,
  onSubmit,
}) => {
  const {Icon, passwordVisibility} = useTogglePasswordVisibility();
  const {error, loading, data} = useAppSelector(state => state.auth);

  useFocusEffect(
    useCallback(() => {
      if (data && !error) {
        navigation.navigate(LOGIN);
      }
    }, [data, error, navigation]),
  );

  return (
    <Container style={{marginTop: 100}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        {error?.message && (
          <MessageComponent message={error.message} state="danger" />
        )}
        <Input
          label={'Username'}
          onChangeText={(value: string) => onChange({name: 'username', value})}
          value={getFormValue('username')}
          placeholder="Enter username"
          error={errors.username || error?.username}
        />
        <Input
          label="First Name"
          onChangeText={(value: string) => onChange({name: 'firstName', value})}
          value={getFormValue('firstName')}
          placeholder="Enter first name"
          error={errors.firstName || error?.firstName}
        />
        <Input
          label="Last Name"
          onChangeText={(value: string) => onChange({name: 'lastName', value})}
          value={getFormValue('lastName')}
          placeholder="Enter last name"
          error={errors.lastName || error?.lastName}
        />
        <Input
          label="Email"
          onChangeText={(value: string) => onChange({name: 'email', value})}
          value={getFormValue('email')}
          placeholder="Enter email"
          error={errors.email || error?.email}
        />
        <Input
          label="Password"
          onChangeText={(value: string) => onChange({name: 'password', value})}
          value={getFormValue('password')}
          icon={<Icon />}
          iconPosition="right"
          placeholder="Enter password"
          secureTextEntry={passwordVisibility}
          error={errors.password || error?.password}
        />
        <View style={styles.btn}>
          <CustomButton
            title="Register"
            state="notice"
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
          />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
            <Text style={styles.registerBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterPage;
