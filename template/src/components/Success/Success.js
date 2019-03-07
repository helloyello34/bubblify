import React from 'react';
import BubbleServices from '../../services/BubbleServices/BubbleServices'

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
            <div>{this.state.response}</div>
        );
    }
}

export default Success;
