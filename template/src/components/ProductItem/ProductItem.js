import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItem = (product) => {
    var link = "/bubbles/" + product.id
    return (
        <div key={ product.id } className="card border-secondary mb-3 ">
            <NavLink to={link} className="" key={product.id}>
                <div>
                    <div className="card-header text-white">{product.name}</div>
                    <div className="card-body">
                        <img src={product.image} />
                        <p className="text-white">kr. {product.price}</p>
                    </div>
                </div>
            </NavLink>
            <div className="card-body">
                <button type="button" className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductItem;
