import React from 'react'
import axios from 'axios'
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import BundleItem from '../BundleItem/BundleItem'

class BundleContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        BubbleServices.getAllBundles().then(res => {
            this.setState({
                products: res
            });
        });

    };

    render() {
        return (
            <div className="list-group">
                {this.state.products.map(product => {
                    return BundleItem(product)
                })}
            </div>
        );
    };
};

export default BundleContainer;
