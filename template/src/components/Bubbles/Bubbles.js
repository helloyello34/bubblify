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
                    <Navbar />
                    <ProductContainer />
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar />
                    <p>This is the product of my destruction {this.state.productId}</p>
                </div>
            )
        }
    }
}

export default Bubbles