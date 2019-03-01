import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductContainer from '../ProductContainer/ProductContainer'
import ProductDetail from '../ProductDetail/ProductDetail'

class Bubbles extends React.Component{

    constructor(params) {
        super();
        this.state = {
            products : [],
            productId: params.match.params.id
        }
    }

    render() {
        if(typeof this.state.productId == 'undefined')  {
            return (
                <React.Fragment>
                    <Navbar />
                    <ProductContainer />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Navbar />
                    <ProductDetail { ...this.state.productId }/>
                </React.Fragment>
            )
        }
    };
};

export default Bubbles;
