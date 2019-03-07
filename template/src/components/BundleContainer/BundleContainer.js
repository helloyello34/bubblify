import React from 'react'
import BundleItem from '../BundleItem/BundleItem'
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import { BundleConsumer } from '../../context/BundleContext/BundleContext'

const BundleContainer = (props) => {
    return (
        <div className="list-group">
            <BundleConsumer>
                {
                    BundleContext => {
                        return (
                            BundleContext.data.map(product => {
                                return <BundleItem key={product.id} product={product} addToCart={props.addToCart} />
                            })
                        )
                    }
                }
            </BundleConsumer>
        </div>
    );
};

export default BundleContainer;
