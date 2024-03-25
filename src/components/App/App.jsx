import css from './App.module.css'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import 'modern-normalize';




export default function App() {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(getFromStorage(STG_KEY));

  // useEffect(() => {
  //   writeToStorage(STG_KEY, contacts);
  // }, [contacts]);

  // const handleAdd = (newContact) => {
  //   setContacts([
  //     ...contacts,
  //     newContact
  //   ])
  // }

  // const handleDelete = (id) => {
  //   const newList = contacts.filter((contact) => contact.id !== id);
  //   setContacts(newList)
  // }

  
  //const filteredContacts = contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase())})

  return (
   <div className={css.container}>
      <h1>Phonebook</h1>
      {/* <ContactForm onAdd = {handleAdd} />
      <SearchBox value={ filter } onFilter={setFilter}/>
      <ContactList contacts={filteredContacts} onDelete={handleDelete} /> */}
      <ContactForm />
      <SearchBox />
      <ContactList />

    </div>
  )
}


