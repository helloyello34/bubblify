import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink
                    exact to="/bubbles"
                    activeClassName="active"
                    className="nav-link">Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    exact to="/bundles"
                    activeClassName="active"
                    className="nav-link">
                    Bundles
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    exact to="/about"
                    activeClassName="active"
                    className="nav-link">
                    About us
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    exact to="/cart"
                    activeClassName="active"
                    className="nav-link">
                    Cart
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks
