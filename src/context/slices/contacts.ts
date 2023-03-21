import {createSlice} from '@reduxjs/toolkit';
import {MessageState} from 'common/Message/Message';
import {ContactListType, contacts as dataContacts} from 'data/contacts';

type ContactState = {
  contacts: {
    data: ContactListType[] | null;
    error: string | null;
    loading: boolean;
    newData: boolean;
  };
  notification: {
    message: string | null;
    state: MessageState;
  };
};

const initialState: ContactState = {
  contacts: {
    data: null,
    error: null,
    loading: false,
    newData: false,
  },
  notification: {
    message: null,
    state: 'info',
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts.data = action.payload;
    },
    setContactsError: (state, action) => {
      state.contacts.error = action.payload;
    },
    setContactsLoading: (state, action) => {
      state.contacts.loading = action.payload;
    },
    setNewData: state => {
      state.contacts.newData = !state.contacts.newData;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setContacts,
  setNotification,
  setContactsLoading,
  setContactsError,
  setNewData,
} = contactsSlice.actions;

export default contactsSlice.reducer;
