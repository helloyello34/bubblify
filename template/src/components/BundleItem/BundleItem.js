import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const ProductItem = (props) => {
    var link = "/bundles/" + props.product.id
    return (
        <div
        key={props.product.id}
        className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink
            exact to={link}
            key={props.product.id}
            >
                <div>
                    <div className="card-header text-white">{props.product.name}</div>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => props.addToCart(props.product)}>Add to cart</button>
        </div>
    );
};

// ProductItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     items: PropTypes.array.isRequired
// };

export default ProductItem;
