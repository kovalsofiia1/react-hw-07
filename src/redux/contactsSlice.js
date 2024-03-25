import { createSlice } from "@reduxjs/toolkit";

const STG_KEY = "CONTACTS";

const getFromStorage = (key) => {
  const contacts = localStorage.getItem(key);
  return JSON.parse(contacts) ? JSON.parse(contacts): [];
}

// const writeToStorage = (key, contacts) => {
//   localStorage.setItem(key, JSON.stringify(contacts))
// }


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: getFromStorage(STG_KEY) },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
             const index = state.items.findIndex(contact => contact.id === action.payload);
             state.items.splice(index, 1);
        },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;