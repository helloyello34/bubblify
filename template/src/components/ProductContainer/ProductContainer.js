import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { BubbleConsumer } from '../../context/BubbleContext/BubbleContext'
import PropTypes from 'prop-types';

const ProductContainer = (props) => {
    const {addToCart} = props;
    return (
        <div className="list-group">
            <BubbleConsumer>
                {
                    BubbleContext => {
                        return (
                            BubbleContext.data.map(product => {
                                return <ProductItem key={product.id} product={product} addToCart={addToCart} />;
                            })
                        )
                    }
                }
            </BubbleConsumer>
        </div>
    );
};

ProductContainer.propTypes = {
    addToCart: PropTypes.func
}


export default ProductContainer;
