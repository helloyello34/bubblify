import React from 'react'
import BundleItem from '../BundleItem/BundleItem'
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import { BundleConsumer } from '../../context/BundleContext/BundleContext'

const BundleContainer = () => {
    return (
        <div className="list-group">
            <BundleConsumer>
                {
                    BundleContext => {
                        return (
                            BundleContext.data.map(product => {
                                return BundleItem(product);
                            })
                        )
                    }
                }
            </BundleConsumer>
        </div>
    );
};

export default BundleContainer;
