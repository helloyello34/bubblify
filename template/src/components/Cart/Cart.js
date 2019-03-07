import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cartItems, total } = this.props;
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
                <Link to="/checkoutdelivery" cartitems={this.props.cartItems} key={this.props.cartItems.id}>
                    <button className={this.getBtnClasses()} disabled={this.isBtnDisabled()}>Checkout by delivery</button>
                </Link>
                <Link to="/checkout">
                    <button className={this.getBtnClasses()} disabled={this.isBtnDisabled()}>Checkout by store pickup</button>
                </Link>
            </React.Fragment>
        );
    }
    getBtnClasses() {
        let classes = "btn btn-primary"
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
    removeFromCart: PropTypes.func
}

export default Cart;
