import React, {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginComponent from 'components/Login/LoginPage';
import {AuthStackParamList} from 'navigation/AuthNavigator';
import {
  OnChangeFormType,
  RegisterFormType,
} from 'screens/Register/RegisterScreen';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {setError} from 'slices/auth';
import login from 'context/actions/login';
import {useFocusEffect} from '@react-navigation/native';

export type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = props => {
  const [form, setForm] = useState<RegisterFormType>({});
  const {error: formErrors, loading} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      return () => {
        // Take away errors when leaving the screen
        if (formErrors) dispatch(setError(null));
      };
    }, [formErrors]),
  );

  const onChange = ({name, value}: OnChangeFormType) => {
    setForm(prev => ({...prev, [name]: value}));
    if (formErrors) dispatch(setError({...formErrors, [name]: null}));
  };
  console.log(form);
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
