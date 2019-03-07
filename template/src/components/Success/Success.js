import React from 'react'
import { Link } from 'react-router-dom'
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import PropTypes from 'prop-types'

class Success extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ""
        }
    }

    componentDidMount() {
        BubbleServices.postOrder(this.props.cartItems, this.props.telephoneNumber).then(res => {
            this.setState({
                response: res
            });
        })
    }

    render() {
        return (
            <div className="center">
                <h1>{this.state.response}</h1>
                <div className="center">
                    <Link to="/">
                        <button className="btn btn-primary">Home</button>
                    </Link>
                </div>
            </div>
        );
    }
}

Success.propTypes = {
    cartItems: PropTypes.object,
    telephoneNumber: PropTypes.string
}

export default Success;
