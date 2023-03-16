import React, {useEffect, useState} from 'react';
import Container from 'common/container';
import CustomButton from 'common/CustomButton/ButtonComponent';
import Input from 'common/Input/InputComponent';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {REGISTER} from 'constants/routeNames';
import {Props} from 'screens/Login/LoginScreen';
import styles from './styles';
import useTogglePasswordVisibility from 'hooks/useTogglePasswordVisibility';
import MessageComponent from 'common/Message/Message';
import {AuthFormType} from 'components/Register/RegisterPage';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {setNotification} from 'slices/contacts';

const LoginPage: React.FC<Omit<AuthFormType, 'errors'> & Props> = props => {
  const {getFormValue, onChange} = props;
  const {loading, error} = useAppSelector(state => state.auth);
  const {passwordVisibility, Icon} = useTogglePasswordVisibility();
  const notification = useAppSelector(state => state.contacts.notification);
  const dispatch = useAppDispatch();

  return (
    <Container style={{marginTop: 100}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        {error?.message && (
          <MessageComponent
            onDismiss={() => null}
            message={error?.message}
            state="danger"
          />
        )}

        {notification?.message && (
          <MessageComponent
            onDismiss={() => dispatch(setNotification({}))}
            message={notification.message}
            state={notification.state}
          />
        )}

        <Input
          label={'Username'}
          onChangeText={(value: string) => onChange({name: 'username', value})}
          value={getFormValue('username')}
          placeholder="Enter username"
          error={error?.username}
        />
        <Input
          label="Password"
          onChangeText={(value: string) => onChange({name: 'password', value})}
          value={getFormValue('password')}
          icon={<Icon />}
          iconPosition="right"
          placeholder="Enter password"
          secureTextEntry={passwordVisibility}
          error={error?.password}
        />
        <View style={styles.btn}>
          <CustomButton
            title="Login"
            state="notice"
            onPress={props.onSubmit}
            loading={loading}
          />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.registerText}>
            Need to register for an account?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(REGISTER)}>
            <Text style={styles.registerBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginPage;
