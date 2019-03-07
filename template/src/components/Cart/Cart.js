import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'
import { Link } from 'react-router-dom'

const Cart = props => {
    const { bubbles, total } = props.cartItems;
    const removeFromCart = props.removeFromCart;
    console.log(total);
    return (
        <React.Fragment>
            {
                bubbles.map((bubble, index) => {
                    return (
                        <blockquote className="blockquote" key={index}>
                            <Link to={`/bubbles/${bubble.id}`}>
                                <p className="mb-0">
                                    {bubble.name}
                                </p>
                            </Link>
                            <footer className="blockquote-footer">
                                kr.{bubble.price}
                                <i className="fas fa-trash-alt trash" onClick={() => {
                                    removeFromCart(index);
                                }}></i>
                            </footer>
                        </blockquote>
                    )
                })
            }
            <p> total kr. {total} </p>
            <Link to="/checkoutdelivery" cartitems={props.cartItems} key={props.cartItems.id}>
                <button className="btn btn-primary">Checkout by delivery</button>
            </Link>
            <Link to="/checkout" cartitems={props.cartItems} key={props.cartItems.id}>
                <button className="btn btn-primary">Checkout by delivery</button>
            </Link>
        </React.Fragment>
    );
};

<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

export default Cart;
