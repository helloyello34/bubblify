import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItem = (product) => {
    var link = "/bubbles/" + product.id
    return (
        <div className="list-group-item list-group-item-action flex-column align-items-center">
        <NavLink to={link} className="productItem" key={product.id}>
            <div>
                <div className="card-header text-white">{product.name}</div>
                <img src={product.image} />
                <p className="text-white">kr. {product.price}</p>
            </div>
        </NavLink>
        <button type="button" class="btn btn-primary">Add to cart</button>
        </div>
    );
};

export default ProductItem;
