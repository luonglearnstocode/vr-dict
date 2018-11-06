import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
  <ul className="right">
    <li><NavLink to="/">Logout</NavLink></li>
    <li><NavLink to="/" className="btn btn-floating red darken-1">LN</NavLink></li>
  </ul>
);

export default SignedInLinks;
