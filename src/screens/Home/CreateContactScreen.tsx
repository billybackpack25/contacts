import React, {useState} from 'react';
import CreateContactComponent from 'components/CreateContact/CreateContactComponent';
import {createContact} from 'context/actions/contacts';
import {useAppDispatch} from 'hooks/redux';
import {FormValidationProps} from 'screens/Register/RegisterScreen';
import {camelToReadableLowercase} from 'utils/stringManipulation';
import {CONTACT_LIST} from 'constants/routeNames';
import {CreateContactScreenProps} from 'screens/types';

export type CreateContactFormType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  countryCode?: string;
  contactPicture?: string;
  isFavourite?: boolean;
};

export type OnChangeFormType<Type> = {
  name: keyof Type;
  value: string | boolean;
};

const CreateContactScreen: React.FC<CreateContactScreenProps> = props => {
  const [form, setForm] = useState<CreateContactFormType>({});
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<CreateContactFormType>({});

  const getFormValue = (name: keyof CreateContactFormType) => {
    if (typeof name === 'boolean') return form[name] || false;
    return form[name] || '';
  };

  const onChangeText = ({
    name,
    value,
  }: OnChangeFormType<CreateContactFormType>) => {
    setForm(prev => ({...prev, [name]: value}));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const validation = () => {
    const requiredFields: Partial<keyof CreateContactFormType>[] = [
      'firstName',
      'lastName',
      'phoneNumber',
      'countryCode',
    ];
    return formValidation({form, requiredFields, setErrors});
  };

  const formValidation = ({
    form,
    requiredFields,
    setErrors,
  }: FormValidationProps<CreateContactFormType>) => {
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
    const validationSuccessful = !validation().includes(true);
    if (validationSuccessful) {
      createContact(form)(dispatch)(() =>
        props.navigation.navigate(CONTACT_LIST),
      );
    }
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      getFormValue={getFormValue}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default CreateContactScreen;
