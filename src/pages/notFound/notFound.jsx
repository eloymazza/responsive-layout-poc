import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Page not found!</h1>
    <Link to="/">Return to home</Link>
  </>
);

export default NotFound;
