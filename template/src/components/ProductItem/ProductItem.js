import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItem = (product) => {
    var link = "/bubbles/" + product.id
    return (
        <NavLink
        to={link}
        className="productItem"
        key={product.id}
        >
            <div>
                <h3>{product.name}</h3>
                <img src={product.image} />
                <p>kr. {product.price}</p>
            </div>
        </NavLink>
    );
};

export default ProductItem;