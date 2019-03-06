import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'

const Cart = props => {
    const { bubbles } = props.cartItems;
    console.log(bubbles);
    return (
        <ul>
            {
                bubbles.map(bubble => {
                    return (
                        <li key={bubble.id}>
                            {bubble.name}, kr.{bubble.price}
                            <i className="fas fa-trash-alt trash"></i>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Cart;
