import React from 'react'
import axios from 'axios'
import ProductItem from '../ProductItem/ProductItem'
import BubbleServices from '../../services/BubbleServices/BubbleServices'

class ProductContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        BubbleServices.getAllBubbles().then(res => {
            this.setState({
                products: res
            });
        });
    };

    render() {
        var productList = this.state.products.map(product => {
            return ProductItem(product);
        });
        return (
            <div className="list-group">
                {productList}
            </div>
        );
    };
};

export default ProductContainer;
