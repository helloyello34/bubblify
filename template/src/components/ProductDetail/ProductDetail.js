import React from 'react';
import axios from 'axios';
import BubbleServices from '../../services/BubbleServices/BubbleServices';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productId: props.match.params.id,
            product: []
        }
    }

    componentDidMount() {
        BubbleServices.getBubbleById(this.state.productId).then(res => {
            this.setState({
                product: res
            })
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.product.name}</h1>
                <img src={this.state.product.image}></img>
                <p>description: {this.state.product.description}</p>
                <p>kr. {this.state.product.price}</p>
            </div>
        );
    }

}

export default ProductDetail;
