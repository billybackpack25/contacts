import {createSlice} from '@reduxjs/toolkit';
import {MessageState} from 'common/Message/Message';

type ContactState = {
  contacts: {
    data:
      | {
          id: number;
          name: string;
        }[]
      | {};
    error: string | null;
    loading: boolean;
  };
  notification: {
    message: string | null;
    state: MessageState;
  };
};

const initialState: ContactState = {
  contacts: {
    data: {},
    error: null,
    loading: false,
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
    contacts: state => {
      state.contacts.data = {contacts: [{id: 1, name: 'Bill'}]};
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {contacts, setNotification} = contactsSlice.actions;

export default contactsSlice.reducer;
