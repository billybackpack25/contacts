import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RegisterPage from 'components/Register/RegisterPage';
import {AuthStackParamList} from 'navigation/AuthNavigator';
import {
  camelToReadableLowercase,
  capitaliseFirstLetter,
} from 'utils/stringManipulation';
import register, {clearAuthAction} from 'context/actions/register';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {setError as reduxSetError} from 'slices/auth';
import {useFocusEffect} from '@react-navigation/native';

export type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export type RegisterFormType = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

export type OnChangeFormType = {
  name: keyof RegisterFormType;
  value: string;
};

export type ErrorLabelType = (keyof RegisterFormType)[];

const RegisterScreen: React.FC<Props> = props => {
  const dispatch = useAppDispatch();
  const {data, error: formErrors} = useAppSelector(state => state.auth);
  const [form, setForm] = useState<RegisterFormType>({});
  const [errors, setErrors] = useState<RegisterFormType>({});
  const requiredFields: ErrorLabelType = [
    'username',
    'email',
    'password',
    'firstName',
    'lastName',
  ];

  useFocusEffect(
    useCallback(() => {
      // Here to call on screen load
      return () => {
        // Call when leaving the screen
        if (data) clearAuthAction()(dispatch);
        if (formErrors) dispatch(reduxSetError(null));
      };
    }, [data, formErrors]),
  );

  const getFormValue = (name: keyof RegisterFormType) => {
    return form[name] || '';
  };

  const onChange = ({name, value}: OnChangeFormType) => {
    setForm(prev => ({...prev, [name]: value}));
    if (formErrors) dispatch(reduxSetError({...formErrors, [name]: null}));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }

    if (value === '')
      setErrors(prev => ({
        ...prev,
        [name]: `${capitaliseFirstLetter(name)} is required`,
      }));
  };

  const formValidation = () => {
    return requiredFields.map(field => {
      if (!form[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: `The ${camelToReadableLowercase(field)} field is required`,
        }));
        return true;
      }
      return false;
    });
  };

  const onSubmit = () => {
    if (formValidation().includes(true)) {
      console.log('ERROR');
    } else {
      register(form)(dispatch);
    }
  };

  return (
    <RegisterPage
      onSubmit={onSubmit}
      onChange={onChange}
      getFormValue={getFormValue}
      form={form}
      errors={errors}
      {...props}
    />
  );
};

export default RegisterScreen;
