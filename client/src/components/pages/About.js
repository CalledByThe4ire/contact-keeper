import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1 className="h1">About This App</h1>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark text-white px-1">
        <strong>Version: </strong>1.0.0
      </p>
    </Fragment>
  );
};

export default About;
