import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.contactItem}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
