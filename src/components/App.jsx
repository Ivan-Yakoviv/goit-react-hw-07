// import { useEffect, useState } from "react";
import "./App.css";
// import { nanoid } from "nanoid";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
// import { useSelector } from "react-redux";
// import { selectContacts } from "../redux/contacts/selectors";

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');

  //    return savedContacts ? JSON.parse(savedContacts) : [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ];
  //   }
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const newContact = { id: nanoid(), name, number };
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== contactId)
  //   );
  // };

  // const handleChange = (event) => {
  //   setFilter(event.target.value);
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const contacts = useSelector(selectContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
