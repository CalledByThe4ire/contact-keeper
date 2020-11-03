import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((contact) => contact._id !== action.payload),
        ],
        loading: false,
      };
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.payload,
      };
    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.map((contact) =>
            contact._id === action.payload._id ? action.payload : contact
          ),
        ],
        loading: false,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        currentContact: null,
        filteredContacts: null,
        loading: true,
        error: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.contacts.filter(
          (contact) =>
            contact.name.includes(action.payload.toLowerCase()) ||
            contact.email.includes(action.payload.toLowerCase())
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredContacts: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
