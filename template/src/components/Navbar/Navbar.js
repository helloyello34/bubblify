import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks'

const Navbar = () => {
    var myCart = JSON.parse(localStorage.getItem('cart'));
    if (myCart == null) {

        var cartNumber = 0;
    } else {
        var cartNumber = myCart.bubbles.length;
    }

    console.log(cartNumber);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand"><img className="logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/d87xoxp-da860c6a-79d1-44d3-86a0-88a4d638dc37.png" alt="logo"></img></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLinks />
                <i className="fas fa-shopping-cart fa-2x cart-icon"></i>
                <span className="cart-number badge badge-pill badge-primary">{cartNumber}</span>
            </div>
        </nav>
    );
}

export default Navbar;
