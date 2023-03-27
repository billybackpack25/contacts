import {useFocusEffect} from '@react-navigation/native';
import CreateContactComponent from 'components/CreateContact/CreateContactComponent';
import {CONTACT_DETAIL} from 'constants/routeNames';
import {createContact, updateContact} from 'context/actions/contacts';
import {ContactListType} from 'data/contacts';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import useSetHeader from 'hooks/useSetHeader';
import React, {useCallback, useState} from 'react';
import {FormValidationProps} from 'screens/Register/RegisterScreen';
import {CreateContactScreenProps} from 'screens/types';
import {camelToReadableLowercase} from 'utils/stringManipulation';

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
  useSetHeader({});
  const [form, setForm] = useState<CreateContactFormType>({});
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<CreateContactFormType>({});
  const dataContacts =
    useAppSelector(state => state.contacts.contacts.data) || [];

  useFocusEffect(
    useCallback(() => {
      if (props.route.params) {
        const formParams = props.route.params;
        setForm({
          contactPicture: formParams.contact_picture,
          countryCode: formParams.country_code,
          firstName: formParams.first_name,
          isFavourite: formParams.is_favourite,
          lastName: formParams.last_name,
          phoneNumber: formParams.phone_number,
        });
      }
    }, [props.route.params]),
  );

  const getFormValue = (name: keyof CreateContactFormType) => {
    if (typeof name === 'boolean') {
      return form[name] || false;
    }
    return form[name] || '';
  };

  /**
   * Added useCallback so that I can use it inside of a useEffect,
   * in the CreateContactComponent
   */
  const onChangeText = useCallback(
    ({name, value}: OnChangeFormType<CreateContactFormType>) => {
      setForm(prev => ({...prev, [name]: value}));
      if (errors[name]) {
        setErrors(prev => ({...prev, [name]: null}));
      }
    },
    [errors],
  );

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
      if (props.route.params && props.route.params.id) {
        updateContact(form, props.route.params.id)(dispatch, dataContacts)(
          (formData: ContactListType) =>
            props.navigation.navigate(CONTACT_DETAIL, formData),
        );
      } else {
        createContact(form)(dispatch, dataContacts)(
          (formData: ContactListType) =>
            props.navigation.navigate(CONTACT_DETAIL, formData),
        );
      }
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
