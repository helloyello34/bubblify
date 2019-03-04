import React from 'react'
import BundleItem from '../BundleItem/BundleItem'
import BubbleServices from '../../services/BubbleServices/BubbleServices'

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
            })
        })
    };

    render() {
        var BundleList = this.state.products.map(product => {
            return BundleItem(product);
        });
        return (
            <div className="list-group">
                {BundleList}
            </div>
        );
    };
};

export default BundleContainer;
