import React, {Component} from 'react'
import axios from 'axios'
import BundleContainer from '../BundleContainer/BundleContainer'

class Bundle extends Component {
    render(){
        return (
            <div className="outer-product-container">
                <BundleContainer addToCart={this.props.addToCart} />
            </div>
        )
    }
};

export default Bundle;
