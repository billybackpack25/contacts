import {AppDispatch} from 'context/store';
import {ContactListType, contacts as dataContacts} from 'data/contacts';
import {CreateContactFormType} from 'screens/Home/CreateContactScreen';
import {
  setContacts,
  setContactsError,
  setContactsLoading,
  setNewData,
} from 'slices/contacts';

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

export const updateContact =
  (form: CreateContactFormType, id: string) =>
  (dispatch: AppDispatch, contactsData: ContactListType[]) =>
  async (onSuccess: Function) => {
    dispatch(setContactsLoading(true));
    try {
      const index = contactsData.findIndex(i => i.id === id);
      contactsData[index].contact_picture = form.contactPicture || '';
      contactsData[index].country_code = form.countryCode || '+44';
      contactsData[index].first_name = form.firstName || '';
      contactsData[index].is_favourite = form.isFavourite || false;
      contactsData[index].last_name = form.lastName || '';
      contactsData[index].phone_number = form.phoneNumber || '';
      dispatch(setContacts(contactsData));
      dispatch(setNewData());
      onSuccess(contactsData[index]);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };

export const createContact =
  (form: CreateContactFormType) =>
  (dispatch: AppDispatch, contactsData: ContactListType[]) =>
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
      id: contactsData[contactsData.length - 1].id + 1,
    };
    try {
      dispatch(setContacts([...contactsData, formData]));
      dispatch(setNewData());
      onSuccess(formData);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };

export const deleteContact =
  (contact: ContactListType) =>
  (dispatch: AppDispatch, contactsData: ContactListType[]) =>
  async (onSuccess: Function) => {
    dispatch(setContactsLoading(true));
    try {
      console.log(contactsData);
      dispatch(setContacts(contactsData.filter(i => i.id !== contact.id)));
      dispatch(setNewData());
      onSuccess();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };

export const favContact =
  (contact: ContactListType) =>
  (dispatch: AppDispatch, contactsData: ContactListType[]) =>
  async (onSuccess: Function) => {
    dispatch(setContactsLoading(true));
    try {
      const toggleFav = contactsData.find(i => i.id === contact.id);
      if (toggleFav) {
        toggleFav.is_favourite = !toggleFav.is_favourite;
      }
      dispatch(
        setContacts([
          ...contactsData.filter(i => i.id !== contact.id),
          toggleFav,
        ]),
      );
      dispatch(setNewData());
      onSuccess();
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };

export default getContactsAction;
