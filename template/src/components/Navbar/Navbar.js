import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">Logo</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;
