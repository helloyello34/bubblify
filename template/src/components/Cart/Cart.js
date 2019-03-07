import React from 'react'
import Navbar from '../Navbar/Navbar'
import App from '../App'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bubbles: props.cartItems.bubbles,
            total: props.cartItems.total,
            removeFromCart: props.removeFromCart
        }
    }

    componentDidMount() {

    }

    render(){
        return (
        <React.Fragment>
            <h1>Your Cart</h1>
            {
                this.state.bubbles.map((bubble, index) => {
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
                                    this.state.removeFromCart(index);
                                }}></i>
                            </footer>
                        </blockquote>
                    )
                })
            }
            <p> total kr. {this.state.total} </p>
            <Link to="/checkoutdelivery" cartitems={this.props.cartItems} key={this.props.cartItems.id}>
                <button className={this.getBtnClasses()} disabled={this.isBtnDisabled()}>Checkout by delivery</button>
            </Link>
            <Link to="/checkout">
                <button className={this.getBtnClasses()} disabled={this.isBtnDisabled()}>Checkout by store pickup</button>
            </Link>
        </React.Fragment>
    );
    }
    getBtnClasses(){
        let classes = "btn btn-primary"
        if(this.state.bubbles.length < 1){
            classes += " disabled";
        }
        return classes;
    }
    isBtnDisabled(){
        if(this.state.bubbles.length < 1){
            return true
        }
        return false
    }
}

Cart.propTypes = {
    bubbles: PropTypes.object,
    total: PropTypes.number
}

export default Cart;
