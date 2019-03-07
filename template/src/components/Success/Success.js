import React, { Component } from 'react';
import BubbleServices from '../../services/BubbleServices/BubbleServices.js'

class Success extends Component {
    constructor(props) {
        super(props);
        /*
                BubbleServices.postOrder(props.cartItems, props.telephoneNumber).then(res => {
                });
                */
    }

    render() {
        return (
            <div>SUCCESS YAYY</div>
        );
    }
}

export default Success;