import {AppDispatch} from 'context/store';
import {
  setContacts,
  setContactsError,
  setContactsLoading,
  setNewData,
} from 'slices/contacts';
import {ContactListType, contacts as dataContacts} from 'data/contacts';
import {CreateContactFormType} from 'screens/Home/CreateContactScreen';

export const getContactsAction = () => async (dispatch: AppDispatch) => {
  dispatch(setContactsLoading(true));
  await new Promise((r: any) => setTimeout(r, 1000));
  dispatch(setContacts(dataContacts));
  dispatch(setContactsError(null));
  dispatch(setContactsLoading(false));
};

export const getContactsError = () => async (dispatch: AppDispatch) => {
  dispatch(setContactsLoading(true));
  await new Promise((r: any) => setTimeout(r, 1000));
  // dispatch(setContacts(dataContacts));
  dispatch(setContactsError('Could not access API to get contacts'));
  dispatch(setContactsLoading(false));
};

export const createContact =
  (form: CreateContactFormType) =>
  (dispatch: AppDispatch) =>
  async (onSuccess: Function) => {
    dispatch(setContactsLoading(true));
    const formData: ContactListType = {
      createdAt: new Date().toLocaleDateString(),
      email: '',
      last_name: form.lastName || '',
      first_name: form.firstName || '',
      country_code: form.countryCode || '+44',
      contact_picture: form.contactPicture || '',
      is_favourite: form.isFavourite || false,
      phone_number: form.phoneNumber || '',
      id: dataContacts[dataContacts.length - 1].id + 1,
    };
    try {
      dispatch(setContacts([...dataContacts, formData]));
      dispatch(setNewData());
      onSuccess();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };

export default getContactsAction;
