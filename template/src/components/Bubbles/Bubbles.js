import React, { Component } from 'react'
import ProductContainer from '../ProductContainer/ProductContainer'
// import BubbleServices from '../../services/BubbleServices/BubbleServices'


//muna bæta við proptype fyrir addtocart fall ?

class Bubbles extends Component {
    render() {
        return (
            <div className="outer-product-container">
                <ProductContainer addToCart={this.props.addToCart} />
            </div>
        );
    }
}


export default Bubbles;