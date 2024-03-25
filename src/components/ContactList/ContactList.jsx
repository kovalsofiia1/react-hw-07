import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });

   
    return (
        <ul className={css.list}>
            {filteredContacts.length>0 ? (filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))) : <p className={css.noContacts}>No contacts!</p>}
        </ul>
    );
}



