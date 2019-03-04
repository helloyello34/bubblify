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
            console.log(res);
            this.setState({
                product: res
            })
        });
    };

    render() {
        return (
            <div className="outer-product-container center">
                <div className="card border-secondary mb-3">
                    <div className="card-header">{this.state.product.name}</div>
                    <div className="card-body">
                        <img src={this.state.product.image}></img>
                        <p>Description:<br/> {this.state.product.description}</p>
                        <p>kr. {this.state.product.price}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetail;
