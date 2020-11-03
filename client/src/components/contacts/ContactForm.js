import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const {
    addContact,
    updateContact,
    clearCurrentContact,
    currentContact,
  } = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [currentContact]);

  const { name, email, phone, type } = contact;

  const clearAll = () => {
    clearCurrentContact();
  };

  const handleChange = ({ target }) =>
    setContact({ ...contact, [target.name]: target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="h2 text-primary mb-3">
        {currentContact ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="email" className="sr-only">
        Name
      </label>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="phone" className="sr-only">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <div className="form-group mb-3">
        <h5 className="h5">Contact Type</h5>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="type"
            value="personal"
            checked={type === 'personal'}
            onChange={handleChange}
          />
          <label htmlFor="type" className="form-check-label">
            Personal
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="type"
            value="professional"
            checked={type === 'professional'}
            onChange={handleChange}
          />
          <label htmlFor="type" className="form-check-label">
            Professional
          </label>
        </div>
      </div>
      <input
        type="submit"
        className="form-control btn btn-primary"
        value={currentContact ? 'Update Contact' : 'Add Contact'}
      />
      {currentContact && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
