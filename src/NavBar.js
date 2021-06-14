import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/articles" className="nav-link" exact page={'article'}>Articles</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
