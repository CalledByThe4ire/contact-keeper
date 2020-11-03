import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const { setAlert } = useContext(AlertContext);

  const { loginUser, clearErrors, error, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid credentials!') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      loginUser({ email, password });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-none d-lg-block"></div>
        <div className="col col-lg-8">
          <h1 className="h1 text-center">
            Account <span className="text-primary">Login</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Login"
            />
          </form>
        </div>
        <div className="col d-none d-lg-block"></div>
      </div>
    </div>
  );
};

export default Login;
