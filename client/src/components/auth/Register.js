import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { registerUser, clearErrors, error, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists!') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fileds', 'danger');
    } else if (password !== password2) {
      setAlert("Passwords don't match", 'danger');
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-none d-lg-block"></div>
        <div className="col-lg-8">
          <h1 className="h1 text-center">
            Account <span className="text-primary">Register</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                value={password2}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Register"
            />
          </form>
        </div>
        <div className="col d-none d-lg-block"></div>
      </div>
    </div>
  );
};

export default Register;
