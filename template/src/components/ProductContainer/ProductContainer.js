import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { BubbleConsumer } from '../../context/BubbleContext/BubbleContext'

<<<<<<< HEAD
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
            <div className="list">
                {productList}
            </div>
        );
    };
=======
const ProductContainer = () => {
    return (
        <div className="list-group">
            <BubbleConsumer>
                {
                    BubbleContext => {
                        return (
                            BubbleContext.data.map(product => {
                                return ProductItem(product);
                            })
                        )
                    }
                }
            </BubbleConsumer>
        </div>
    );
>>>>>>> master
};

export default ProductContainer;
