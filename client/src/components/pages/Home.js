import React, { useContext, useEffect, Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm />
        </div>
        <div className="col">
          <Fragment>
            <ContactFilter />
            <Contacts />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default Home;
