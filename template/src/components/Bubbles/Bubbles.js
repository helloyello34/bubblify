import React, { Component } from 'react'
import ProductContainer from '../ProductContainer/ProductContainer'
import PropTypes from 'prop-types';

const Bubbles = (props) => {
    const {addToCart} = props;
    return (
        <div className="outer-product-container">
            <ProductContainer addToCart={addToCart} />
        </div>
    );
}

Bubbles.propTypes = {
    addToCart: PropTypes.func
}

export default Bubbles;
