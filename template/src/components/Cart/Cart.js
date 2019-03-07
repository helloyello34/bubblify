import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cartItems, total, emptyCart } = this.props;
        return (
            <React.Fragment>
                <h1>Your Cart</h1>
                {
                    cartItems.bubbles.map((bubble, index) => {
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
                                        if (this.props.removeFromCart != 'undefined') {
                                            this.props.removeFromCart(index);
                                        }
                                    }}></i>
                                </footer>
                            </blockquote>
                        )
                    })
                }
                <p> total kr. {cartItems.total} </p>
                <button className={this.getBtnClasses('danger')} onClick={() => {
                    emptyCart();
                }} >Empty Cart</button> <br />
                <Link to="/checkoutdelivery" cartitems={this.props.cartItems} key={this.props.cartItems.id}>
                    <button className={this.getBtnClasses('primary')} disabled={this.isBtnDisabled()}>Checkout by delivery</button>
                </Link>
                <Link to="/checkout">
                    <button className={this.getBtnClasses('primary')} disabled={this.isBtnDisabled()}>Checkout by store pickup</button>
                </Link>
            </React.Fragment>
        );
    }
    getBtnClasses(theme) {
        let classes = `btn btn-${theme} cart-btn`
        if (this.props.cartItems.bubbles.length < 1) {
            classes += " disabled";
        }
        return classes;
    }
    isBtnDisabled() {
        if (this.props.cartItems.bubbles.length < 1) {
            return true
        }
        return false
    }
}

Cart.propTypes = {
    cartItems: PropTypes.object,
    emptyCart: PropTypes.func,
    removeFromCart: PropTypes.func
}

export default Cart;
