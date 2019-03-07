import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Success from '../Success/Success.js';

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
                <button className="btn btn-primary" onClick={e => this.onClickHandler()}>Accept</button>
                <Link to="/">
                    <button className="btn btn-danger">Decline</button>
                </Link>
            </React.Fragment>
        );
    }
}

export default ReviewOrder;