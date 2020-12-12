import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts
        .map(contact => contact.name.toLocaleLowerCase())
        .includes(data.name)
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(
        //   prevState => ({
        //   contacts: prevState.contacts.push({ ...data, id: uuidv4() }),
        // }));
        ({ contacts }) => contacts.push({ ...data, id: uuidv4() }),
      );
    }
  };

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   const normalazedFilter = filter.toLocaleLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalazedFilter),
  //   );
  // };

  render() {
    // const filteredContacts = this.getVisibleContacts();

    const { contacts, filter } = this.state;

    const normalazedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalazedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
