import React from 'react'
import { NavLink } from 'react-router-dom'

//MUNA proptypes

const ProductItem = (props) => {
    var link = "/bubbles/" + props.product.id
    return (
        <div
            key={props.id}
            className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink to={link} className="productItem" key={props.product.id}>
                <div>
                    <div className="card-header text-white">{props.product.name}</div>
                    <img src={props.product.image} />
                    <p className="text-white">kr. {props.product.price}</p>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => props.addToCart(props.product)}>Add to cart</button>
        </div>
    );
};

export default ProductItem;
