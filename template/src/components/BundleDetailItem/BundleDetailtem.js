import React from 'react'
import { NavLink } from 'react-router-dom'

//MUNA proptypes

const BundleDetailItem = (props) => {
    var link = "/bubbles/" + props.id
    return (
        <div
            key={props.id}
            className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink to={link} className="BundleDetailItem" key={props.id}>
                <div>
                    <div className="card-header text-white">{props.name}</div>
                    <img src={props.image} />
                    <p className="text-white">kr. {props.price}</p>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary" onClick={() => props.addToCart(props)}>Add to cart</button>
        </div>
    );
};

export default BundleDetailItem;