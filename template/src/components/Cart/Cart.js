import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'
import { Link } from 'react-router-dom'

const Cart = props => {
    const { bubbles } = props.cartItems;
    const removeFromCart = props.removeFromCart;
    return (
        <React.Fragment>
            <ul className="list-group">
                {
                    bubbles.map((bubble, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                {bubble.name}, kr.{bubble.price}
                                <i className="fas fa-trash-alt trash" onClick={() => {
                                    removeFromCart(index);
                                }}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/checkoutdelivery" cartitems={props.cartItems} key={props.cartItems.id}>
                <button className="btn btn-primary">Checkout by delivery</button>
            </Link>
            <Link to="/checkout" cartitems={props.cartItems} key={props.cartItems.id}>
                <button className="btn btn-primary">Checkout by delivery</button>
            </Link>
        </React.Fragment>
    );
};

export default Cart;
