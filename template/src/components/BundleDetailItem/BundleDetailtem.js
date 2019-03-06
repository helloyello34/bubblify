import React from 'react'
import { NavLink } from 'react-router-dom'

//MUNA proptypes

const BundleDetailItem = (props) => {
    const {id, name, price, image, addToCart} = props;
    var link = "/bubbles/" + id
    return (
        <div
            key={id}
            className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink to={link} className="BundleDetailItem" key={id}>
                <div>
                    <div className="card-header text-white">{name}</div>
                    <img src={image} />
                    <p className="text-white">kr. {price}</p>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => addToCart(props)}>Add to cart</button>
        </div>
    );
};

export default BundleDetailItem;
