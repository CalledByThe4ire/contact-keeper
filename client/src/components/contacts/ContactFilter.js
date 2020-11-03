import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilter, filteredContacts } = useContext(
    ContactContext
  );

  const filterRef = useRef('');

  useEffect(() => {
    if (filteredContacts === null) {
      filterRef.current.value = '';
    }
  });

  const handleChange = ({ target: { value } }) => {
    if (filterRef.current.value !== '') {
      filterContacts(value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        className="form-control mb-3"
        ref={filterRef}
        placeholder="Filter Contacts…"
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
