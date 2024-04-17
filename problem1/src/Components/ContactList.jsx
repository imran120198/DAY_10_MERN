import React, { useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Bruce Lee", email: "lee@gmail.com" },
    { id: 2, name: "Naruto", email: "hokage@gmail.com" },
  ]);

  const [newContact, setNewContact] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContact.name.trim() === "" || newContact.email.trim() === "") {
      alert("Please enter both name and email");
      return;
    }
    const newId =
      contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
    const newContactWithId = { ...newContact, id: newId };
    setContacts([...contacts, newContactWithId]);
    setNewContact({ name: "", email: "" });
  };

  return (
    <div>
      {/* Form to add a new contact */}
      <h3>User Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* List of contacts */}
      <ul style={{ width: "20%", margin: "auto", marginTop: "50px" }}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
