import React, {Component} from 'react'
import BundleContainer from '../BundleContainer/BundleContainer'
import PropTypes from 'prop-types';

const Bundle = (props) => {
    const {addToCart} = props;
    return (
        <div className="outer-product-container">
            <BundleContainer addToCart={addToCart} />
        </div>
    )
};

Bundle.propTypes = {
    addToCart: PropTypes.func
}

export default Bundle;
