import React from 'react';
import axios from 'axios'

class ProductDetail extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      productId: prop[0],
      product: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3500/api/bubbles/' + this.state.productId)
      .then(res => {
          console.log(res.data);
          this.setState({
              product: res.data
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
