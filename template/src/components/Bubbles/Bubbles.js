import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductContainer from '../ProductContainer/ProductContainer'

class Bubbles extends React.Component{

    constructor(params) {
        super();
        this.state = {
            products : [],
            productId: params.match.params.id
        }
    }

    render() {
        console.log(this.state.productId);
        if(typeof this.state.productId == 'undefined')  {
            return (
                <div>
                    <ProductContainer />
                </div>
            )
        } else {
            return (
                <div>
                    <p>This is the product of my destruction {this.state.productId}</p>
                </div>
            )
        }
    }
}

export default Bubbles
