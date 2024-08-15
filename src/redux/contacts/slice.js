import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { selectContacts } from "./selectors";

const initialState = {
    items:[
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};
      
const slice = createSlice({
    name: 'contacts',
    initialState,
    loading: false,
    error: null,

    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
         .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
    }
    
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.items.push(action.payload)
    //         },
    //         prepare(newContact) {
    //             return {
    //                 payload: {
    //                     name: newContact.name,
    //                     number: newContact.number,
    //                     id: nanoid(),
    //                 },
    //             };
    //         },
    //     },
    //      deleteContact: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    // },
});

 export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, name) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    )
);
export const contactsReducer = slice.reducer;
// export const { addContact, deleteContact } = slice.actions;