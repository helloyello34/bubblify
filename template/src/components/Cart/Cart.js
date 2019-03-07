import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Cart = props => {
    const { bubbles, total } = props.cartItems;
    console.log(props);
    const removeFromCart = props.removeFromCart;
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
                                    if(removeFromCart != 'undefined'){
                                        removeFromCart(index);
                                    }
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
            <Link to="/checkout">
                <button className="btn btn-primary">Checkout by store pickup</button>
            </Link>
        </React.Fragment>
    );
};

Cart.propTypes = {
    bubbles: PropTypes.object,
    total: PropTypes.number
}

export default Cart;
