import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const BundleItem = (props) => {
    const {product, addToCart} = props;
    var link = "/bundles/" + product.id;
    return (
        <div
        key={product.id}
        className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink
            exact to={link}
            key={product.id}
            >
                <div>
                    <div className="card-header text-white">{product.name}</div>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
};

BundleItem.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func
};

export default BundleItem;
