import React from 'react'
import {NavLink} from 'react-router-dom'

const ProductItem = (bundle) => {
    var link = "/bundles/" + bundle.id
    console.log(bundle)
    return (
        <div
        key={ bundle.id }
        className="list-group-item list-group-item-action flex-column align-items-center">
            <NavLink
            exact to={link}
            >
                <div>
                    <div className="card-header text-white">{bundle.name}</div>
                </div>
            </NavLink>
            <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
    );
};

export default ProductItem;
