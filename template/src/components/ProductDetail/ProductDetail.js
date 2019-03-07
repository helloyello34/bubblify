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
        console.log(props);
    }

    componentDidMount() {
        BubbleServices.getBubbleById(this.state.productId).then(res => {
            console.log(res);
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
                <button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(this.state.product)}>Add to cart</button>
            </div>
        );
    }

}

export default ProductDetail;
