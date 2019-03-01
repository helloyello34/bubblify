import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks'

const Navbar = () => { 
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <NavLink
                exact to="/"
                className="navbar-brand"
                >Logo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLinks />
        </nav>
    );
}

export default Navbar;