import React, {useCallback, useEffect, useState} from 'react';
import LoginComponent from 'components/Login/LoginPage';
import {
  OnChangeFormType,
  RegisterFormType,
} from 'screens/Register/RegisterScreen';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {setError} from 'slices/auth';
import login from 'context/actions/login';
import {useFocusEffect} from '@react-navigation/native';
import {setNotification} from 'slices/contacts';
import {LoginScreenProps} from 'screens/types';

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const [form, setForm] = useState<RegisterFormType>({});
  const {error: formErrors, loading} = useAppSelector(state => state.auth);
  const {notification} = useAppSelector(state => state.contacts);
  const dispatch = useAppDispatch();
  const {
    route: {params},
  } = props;

  useEffect(() => {
    // Set username from registering
    if (params && params.username) {
      setForm(prev => ({...prev, username: params.username}));
    }
  }, [params]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        // Take away errors when leaving the screen
        if (formErrors) dispatch(setError(null));
        if (notification) dispatch(setNotification(null));
      };
    }, [formErrors, notification]),
  );

  const onChange = ({name, value}: OnChangeFormType) => {
    setForm(prev => ({...prev, [name]: value}));
    if (formErrors) dispatch(setError({...formErrors, [name]: null}));
  };

  const onSubmit = () => {
    if (form.username && form.password) {
      login(form)(dispatch);
    }
  };

  const getFormValue = (name: keyof RegisterFormType) => {
    return form[name] || '';
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      getFormValue={getFormValue}
      form={form}
      {...props}
    />
  );
};

export default LoginScreen;
