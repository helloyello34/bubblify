import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const ProductItem = (props) => {
    const { id, name, items } = props
    var link = "/bundles/" + id
    return (
        <div
        key={ id }
        className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink
            exact to={link}
            >
                <div>
                    <div className="card-header text-white">{name}</div>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
    );
};

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

export default ProductItem;
