import React from 'react'
import axios from 'axios'
import BundleItem from '../BundleItem/BundleItem'

class BundleContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3500/api/bundles')
        .then(res => {
            var res_data = res.data.map(item => item)
            this.setState({
                products: res_data
            })
        });
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