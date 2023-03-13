import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import useTogglePasswordVisibility from 'hooks/useTogglePasswordVisibility';
import Container from 'components/common/container';
import CustomButton from 'common/CustomButton/ButtonComponent';
import Input from 'common/Input/InputComponent';
import {LOGIN} from 'constants/routeNames';
import {Props, RegisterFormType} from 'screens/Register/RegisterScreen';
import styles from './styles';
import {useAppSelector} from 'hooks/redux';
import {useFocusEffect} from '@react-navigation/native';
import MessageComponent from 'common/Message/Message';

export type AuthFormType = {
  getFormValue: Function;
  form: RegisterFormType;
  errors: RegisterFormType;
  onChange: Function;
  onSubmit: Function;
};

const RegisterPage: React.FC<AuthFormType & Props> = ({
  onChange,
  form,
  getFormValue,
  navigation,
  errors,
  onSubmit,
  ...props
}) => {
  const {Icon, passwordVisibility} = useTogglePasswordVisibility();
  const {error, loading, data} = useAppSelector(state => state.auth);

  useFocusEffect(
    useCallback(() => {
      if (data && !error) navigation.navigate(LOGIN);
    }, [data, error]),
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
            state="secondary"
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
