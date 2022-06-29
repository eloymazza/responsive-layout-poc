import React from 'react';
import { Link } from 'react-router-dom';
import classes from './dashboards.module.css'

const Dashboards = () => (
  <>
    <h1>Dashboards!</h1>
    <div className={classes.linksContainer}>
      <Link to="/dashboard/1">Dashboard 1</Link>
      <Link to="/dashboard/2">Dashboard 2</Link>
      <Link to="/dashboard/3">Dashboard 3</Link>
    </div>
  </>
);

export default Dashboards;
