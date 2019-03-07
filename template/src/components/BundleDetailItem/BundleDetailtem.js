import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

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
        </div>
    );
};

BundleDetailItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    addToCart: PropTypes.func
}

export default BundleDetailItem;
