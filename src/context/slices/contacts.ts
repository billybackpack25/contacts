import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: {
        data: {},
        error: null,
        loading: false,
    }
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    contacts: (state) => {
      state.data = {contacts: [{id: 1, name: 'Bill'}]}
    },
  },
})

// Action creators are generated for each case reducer function
export const { contacts } = contactsSlice.actions

export default contactsSlice.reducer