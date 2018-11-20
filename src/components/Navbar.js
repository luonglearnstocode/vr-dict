import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
  <nav className="nav-wrapper light-green darken-2 hide-on-med-and-down">
    <div className="container">
      <Link to="/" className="brand-logo">VR Translate</Link>
      <SignedInLink />
      <SignedOutLinks />
    </div>
  </nav>
);

export default Navbar;
