import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { BubbleConsumer } from '../../context/BubbleContext/BubbleContext'

const ProductContainer = (props) => {
    return (
        <div className="list-group">
            <BubbleConsumer>
                {
                    BubbleContext => {
                        return (
                            BubbleContext.data.map(product => {
                                return <ProductItem key={product.id} product={product} addToCart={props.addToCart} />;
                            })
                        )
                    }
                }
            </BubbleConsumer>
        </div>
    );
};

export default ProductContainer;
