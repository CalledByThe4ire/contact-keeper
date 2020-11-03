import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, logoutUser, user } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);

  const handleClick = () => {
    logoutUser();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <span className="nav-link active">Hello, {user && user.name}!</span>
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link" onClick={handleClick}>
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink to="/register" className="nav-link">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3 mb-lg-5">
      <h1 className="h1 navbar-brand mb-0">
        <i className={icon} /> {title}
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
