import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { BubbleConsumer } from '../../context/BubbleContext/BubbleContext'

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
        // <div className="list-group">
        //     // {productList}
        // </div>
    );
};

export default ProductContainer;
