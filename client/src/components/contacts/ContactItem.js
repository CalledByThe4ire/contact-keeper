import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact,
  } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const handleDelete = (id) => {
    deleteContact(id);
    clearCurrentContact();
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex mb-2">
          <h4 className="card-title mb-0">{name}</h4>

          <span
            className={
              'ml-auto align-self-center badge ' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
        <ul className="list-unstyled mb-2">
          {email && (
            <li className="mb-1">
              <i className="fas fa-envelope-open"></i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone"></i> {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className="btn btn-info btn-sm mr-1"
            onClick={() => setCurrentContact(contact)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm mr-1"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default ContactItem;
