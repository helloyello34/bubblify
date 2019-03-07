import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Success from '../Success/Success.js';
import PropTypes from 'prop-types'

class ReviewOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accepted: false
        }
    }

    onClickHandler() {
        this.setState({
            accepted: true
        })
        this.props.emptyCart();
    }

    render() {
        const { bubbles } = this.props.cartItems;
        if (this.state.accepted) {
            return <Route to='/success'
                render={() => (
                    <Success cartItems={this.props.cartItems} telephoneNumber={this.props.telephoneNumber} />
                )} />
        }
        return (
            <React.Fragment>
                <h1>Review Order</h1>
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
                                </footer>
                            </blockquote>
                        )
                    })
                }
                <button className="btn btn-primary" onClick={e => this.onClickHandler()}>Accept</button>
                <Link to="/">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </React.Fragment>
        );
    }
}

ReviewOrder.propTypes = {
    cartItems: PropTypes.object,
    emptyCart: PropTypes.func,
    telephoneNumber: PropTypes.string
}

export default ReviewOrder;
