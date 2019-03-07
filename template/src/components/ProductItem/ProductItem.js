import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
//MUNA proptypes

const ProductItem = (props) => {
    const {product, addToCart} = props;
    var link = "/bubbles/" + product.id
    return (
        <div
            key={product.id}
            className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink to={link} className="productItem" key={product.id}>
                <div>
                    <div className="card-header text-white">{product.name}</div>
                    <img src={product.image} />
                    <p className="text-white">kr. {product.price}</p>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => addToCart(props.product)}>Add to cart</button>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func
}



export default ProductItem;
