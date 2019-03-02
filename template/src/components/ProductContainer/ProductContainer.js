import React from 'react'
import axios from 'axios'
import ProductItem from '../ProductItem/ProductItem'

class ProductContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3500/api/bubbles')
        .then(res => {
            var res_data = res.data.map(item => item)
            this.setState({
                products: res_data
            })
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
