import React from 'react'
import axios from 'axios'
import BundleContainer from '../BundleContainer/BundleContainer'

const Bundle = () => {
    return (
        <div className="outer-product-container">
            <BundleContainer />
        </div>
    )
}


{/**
    class Bundle extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                product: []
            }
        }
    
        componentDidMount() {
            axios.get('http://localhost:3500/api/bundles')
            .then(res => {
                console.log(res);
                let res_data = res.data.map(data => data);
                this.setState({
                    product: res_data
                })
            });
        };
    
        render() {
            console.log(this.state.product)
            return (
                <div className="outer-product-container">
                    fuckit
                </div>
            )
        }
    }
*/}

export default Bundle;