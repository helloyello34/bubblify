import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'
import { Link } from 'react-router-dom'

const Cart = props => {
    const { bubbles } = props.cartItems;
    return (
        <React.Fragment>
            <ul>
                {
                    bubbles.map(bubble => {
                        return (
                            <li key={bubbles.indexOf(bubble)}>
                                {bubble.name}, kr.{bubble.price}
                                <i className="fas fa-trash-alt trash"></i>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/checkoutdelivery">
                <button className="btn btn-primary">Checkout by delivery</button>
            </Link>
            <Link to="/checkout">
                <button className="btn btn-primary">Checkout by store pickup</button>
            </Link>
        </React.Fragment>
    );
};

export default Cart;
